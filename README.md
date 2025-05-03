# ResearchLink

**ResearchLink** is a research discovery tool that helps undergraduate students explore faculty-led research labs. The application scrapes faculty profile pages and research lab directories from university websites, extracts relevant information, and presents it in a clean, searchable format.

## 🔍 Features

- 🌐 Web scraping of university research lab directories
- 🧪 Extracts faculty names, departments, lab titles, research interests, and contact info
- 📊 Outputs structured data in CSV or JSON format
- 🔎 Plans for front-end web UI to browse and filter labs by domain (e.g., AI, bioengineering)
- 📬 Future enhancement: contact faculty directly via integrated messaging

## 🛠 Tech Stack

- **Python** – for scraping and data parsing
- **BeautifulSoup / Requests** – for web scraping
- **Pandas / JSON** – for structuring output
- *(Planned)* React.js – front-end UI to interact with scraped data
- *(Planned)* Flask – lightweight API backend

## 📁 Folder Structure

/researchlink
├── scrapers/
│ ├── usf_scraper.py
│ ├── uf_scraper.py
├── data/
│ ├── usf_labs.csv
├── app/
│ └── (placeholder for web app UI)
├── README.md


## 🚧 Current Status

The scraping and data pipeline is complete for selected universities. The next step is to build a frontend interface for easy exploration.

## 🧠 Use Case

This tool helps undergraduates and early-stage researchers:
- Find mentors and labs that align with their interests
- Discover labs they wouldn’t find easily by browsing department sites
- Take initiative in joining research early in their academic journey

## 👨‍💻 Author

**Tanzeel Rahman**  
- [Portfolio Website](https://tanzeelr.netlify.app)  
- [LinkedIn](https://www.linkedin.com/in/tanzinels)  
- [GitHub](https://github.com/zinels)

