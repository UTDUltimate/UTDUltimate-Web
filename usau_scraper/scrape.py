import csv
import requests
from bs4 import BeautifulSoup

# read from input csv file
urls = []
with open('input.csv') as csv_input:
    csv_reader = csv.reader(csv_input, delimiter=',')
    for row in csv_reader:
        urls += [[ row[0], row[1] ]]

for url in urls:
    if (url[1] != ''):
        page = requests.get(url[1])
        soup = BeautifulSoup(page.content, 'html.parser')

        # scrape team rosters
        roster_rows = soup.find(id='roster_list').find_all('tr')
        roster_rows = roster_rows[1:] # remove header

        # output team rosters
        file_name = 'output/' + url[0] + ' - Roster'
        output_file = open(file_name, mode='w')
        for row in roster_rows:
            output_file.write(row.contents[2].string + '\n')
        print('Created: ' + file_name)

        # scrape game results
        tourney_tables = soup.find_all('table', 'schedule_table')
        for tourney in tourney_tables:
            file_name = 'output/' + url[0] + ' - Tournaments'
            output_file = open(file_name, mode='w')
            print('Created: ' + file_name)
            
            # output game results
            tourney_rows = tourney.find_all('tr')
            tourney_name = ''
            for row in tourney_rows:
                tourney_cols = row.find_all('td')
                if len(tourney_cols) == 1:
                    tourney_name = tourney_cols[0].span.a.string
                elif len(tourney_cols) == 3:
                    output_file.write(f'{tourney_name},{tourney_cols[0].span.string},{tourney_cols[1].span.string},{tourney_cols[2].span.string}\n')