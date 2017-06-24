#!/usr/bin/env python
from bs4 import BeautifulSoup
import csv

html_doc = open('amp_db.html', 'r')
soup = BeautifulSoup(html_doc, 'html.parser')

outfile = open('amp_out.csv', 'w+')
outw = csv.writer(outfile, delimiter=',',
	quotechar='"', quoting=csv.QUOTE_MINIMAL)


form = soup.body.form

for table in form.find_all('table'):
	row = table.tbody.tr
	cols = row.find_all('td')
	desc_col = cols[0]
	seq_col = cols[1]

	seq = seq_col.b.font.tt.contents[0]
	seq = seq.strip()

	if seq.startswith('M'):

		amp_link = desc_col.div.b.a
		amp_id = amp_link.contents[0]
		amp_id = amp_id.strip()

		amp_url = amp_link['href']

		amp_desc = desc_col.contents[1]
		amp_desc = ' '.join(amp_desc.split())
		#amp_desc = amp_desc.replace(';', ',')

		outw.writerow([seq] + [amp_id] + [amp_url] + [amp_desc])

#outw.close();
#html_doc.close();
