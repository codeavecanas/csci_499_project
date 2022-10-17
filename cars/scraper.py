from bs4 import BeautifulSoup
import requests
import pandas as pd
from models import Car
import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'config.settings'


def cars_com_scrape():
    carname = []
    caryear = []
    carprice = []
    carlink = []
    carmiles = []
    carpic = []
    carengine = []
    carmake = []
    
    page = requests.get("https://www.cars.com")
    soup = BeautifulSoup(page.content, "html.parser")
    car_make_info = soup.find_all('option')
    
    for makes in car_make_info[6:36]:
        
        make = makes.text.strip()
        carmake.append(make)

        url = f"https://www.cars.com/shopping/results/?list_price_max=&makes[]={makes.text.strip().lower()}&maximum_distance=20&models[]=&page=1&page_size=100&stock_type=all"
        #url = f"https://www.cars.com/shopping/results/?list_price_max=&makes[]=tesla&maximum_distance=20&models[]=&page=1&page_size=100&stock_type=all"
        
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")
        car_info = soup.find_all('div', class_="vehicle-card-main js-gallery-click-card")
        #print(car_info)
        #print(url)

        pagenum = 1
    
    
        for page in range(pagenum):
            website = requests.get(url)
            soup = BeautifulSoup(website.content, "html.parser")
            nextpage = soup.find('a',id=f'pagination-direct-link-{page + 2}')
            url = 'https://www.cars.com' + nextpage['href']
        
            #print(url)
            #print(page)
        
            
            
            for car in car_info:
            
            
                name = car.find('a', class_="vehicle-card-link js-gallery-click-link")
                name = name.text.strip()[5:]
                carname.append(name)

                year = name.text.strip()[:4]
                caryear.append(year)
        
                price = car.find('span', class_="primary-price")
                price = price.text.strip()[1:].replace(',','')
                carprice.append(price)

                link = 'https://www.cars.com' + name['href']
                carlink.append(link)
        
                #Goes into car page
                carpage = requests.get(link)
                soup2 = BeautifulSoup(carpage.content, "html.parser")
                
                #IF EV
                if soup2.find_all("dd")[3].text.strip() == "Electric":
                    
                    mileage = soup2.find_all("dd")[8]
                    mileage = mileage.text.strip()[:-4].replace(',','')
                    carmiles.append(mileage)
                    
                    engine = soup2.find_all("dd")[3].text.strip()
                    carengine.append(engine)

                #IF NOT EV
                else:
            
                    mileage = soup2.find_all("dd")[9]
                    mileage = mileage.text.strip()[:-4].replace(',','')
                    carmiles.append(mileage)

                    engine = soup2.find_all("dd")[6].text.strip()
                    carengine.append(engine)
        
                pic = soup2.find('img', class_="swipe-main-image image-index-0")
                pic = pic['src']
                carpic.append(pic)
        
                #Prints for testing
                print(name.text.strip()[5:])
                print(name.text.strip()[:4])
                print(price.text.strip()[1:].replace(',',''))
                print(mileage.text.strip()[:-4].replace(',',''))
                print(soup2.find_all("dd")[6].text.strip())
                print(link)
                print(pic['src'])
                #print(pic)
                
                #Adding to database
                newentry = Car(
                    name = carname,
                    make = carmake,
                    year = caryear,
                    price = carprice,
                    miles = carmiles,
                    engine = carengine,
                    link = carlink,
                    image = carpic
                )
                newentry.save()
        
            website = requests.get(url)
            soup = BeautifulSoup(website.content, "html.parser")
            car_info = soup.find_all('div', class_="vehicle-card-main js-gallery-click-card")
            
        

        dfzip = list(zip(carmake,carname,caryear,carprice,carengine,carmiles,carlink,carpic))
        cardata = pd.DataFrame(dfzip, columns = ['number','carmake','name','year','price','engine','miles','link','image'])

        cardata.to_csv('testcardata.csv', index=False)
        return cardata


def autotrader_scrape(): #ran into an error doesn't work for now
    carname = []
    caryear = []
    carprice = []
    carlink = []
    carmiles = []
    carpic = []
    carengine = []
    
    pagenum = 4
    
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection':'keep-alive'
    }
    
    for page in range(pagenum):
        page += 1
        print(page)
        
        url = 'https://www.autotrader.com/cars-for-sale/all-cars/brooklyn-ny-11201?dma=&searchRadius=25&isNewSearch=false&marketExtension=include&showAccelerateBanner=false&sortBy=relevance&numRecords=100'

        if page != 1:
            url = 'https://www.autotrader.com/cars-for-sale/all-cars/brooklyn-ny-11201?dma=&searchRadius=25&isNewSearch=false&marketExtension=include&showAccelerateBanner=false&sortBy=relevance&numRecords=100' + f'&firstRecord={(page - 1)*100}'
    
        page = requests.get(url, headers = headers)
        soup = BeautifulSoup(page.content, "html.parser")
        car_info = soup.find_all('div', class_="item-card row display-flex align-items-stretch")
    
        for car in car_info:

            name = car.find('h2').text.strip().split(" ")[1:]
            name = " ".join(name)
            carname.append(name)
        
            caryear.append(name[0:4])
                
            #go into car details
            link = 'https://www.autotrader.com' + car.find('a', rel="nofollow")['href']
            carlink.append(link)
        
            page = requests.get(link, headers=headers)
            soup2 = BeautifulSoup(page.content, "html.parser")
            pic = soup2.find('img',class_='carousel-image css-1tknha6-StyledImage e1nnhggb0')
        
            carpic.append(pic['src'])
        
            price = soup2.find('span',class_='first-price first-price-lg text-size-700').text.strip()
            price = price.replace(',','').replace('$','')
            carprice.append(price)
        
            engine = soup2.find('div',class_='col-xs-10 margin-bottom-0').text.strip()
            carengine.append(engine)
        
            miles = soup2.find('div',class_='col-xs-10 margin-bottom-0').text.strip()
            miles = miles[:-6].replace(',','')
            carmiles.append(miles)
        
            print(name)
            print(name[0:4])
            print(price)
            print(link)
            print(miles[:-6].replace(',',''))
            print(pic['src'])
            print(engine)

    dfzip = list(zip(carname,caryear,carprice,carengine,carmiles,carlink,carpic))
    cardata = pd.DataFrame(dfzip, columns = ['name','year','price','engine','miles','link','image'])
    cardata.to_csv('testcardata.csv', index=False)
    return cardata

test = cars_com_scrape()