from bs4 import BeautifulSoup
import requests
import pandas as pd


def cars_com_scrape():
    carnumber = []
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

        carmake.append(makes.text.strip())
        url = f"https://www.cars.com/shopping/results/?list_price_max=&makes[]={makes.text.strip().lower()}&maximum_distance=20&models[]=&page=1&page_size=100&stock_type=all"
        #url = f"https://www.cars.com/shopping/results/?list_price_max=&makes[]=tesla&maximum_distance=20&models[]=&page=1&page_size=100&stock_type=all"
        
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")
        car_info = soup.find_all('div', class_="vehicle-card-main js-gallery-click-card")
        #print(car_info)
        #print(url)

        pagenum = 2
    
    
        for page in range(pagenum):
            website = requests.get(url)
            soup = BeautifulSoup(website.content, "html.parser")
            nextpage = soup.find('a',id=f'pagination-direct-link-{page + 2}')
            url = 'https://www.cars.com' + nextpage['href']
        
            #print(url)
            #print(page)
        
            
            
            for car in car_info:
            
            
                name = car.find('a', class_="vehicle-card-link js-gallery-click-link")
                carname.append(name.text.strip()[5:])
        
                caryear.append(name.text.strip()[:4])
        
                price = car.find('span', class_="primary-price")
                carprice.append(price.text.strip()[1:].replace(',',''))
            
                link = 'https://www.cars.com' + name['href']
                carlink.append(link)
        
                #Goes into car page
                carpage = requests.get(link)
                soup2 = BeautifulSoup(carpage.content, "html.parser")
                
                #IF EV
                if soup2.find_all("dd")[3].text.strip() == "Electric":
                    
                    mileage = soup2.find_all("dd")[8]
                    carmiles.append(mileage.text.strip()[:-4].replace(',',''))
                    
                    carengine.append(soup2.find_all("dd")[3].text.strip())
                #IF NOT EV
                else:
            
                    mileage = soup2.find_all("dd")[9]
                    carmiles.append(mileage.text.strip()[:-4].replace(',',''))
        
                    carengine.append(soup2.find_all("dd")[6].text.strip())
        
                pic = soup2.find('img', class_="swipe-main-image image-index-0")
                carpic.append(pic['src'])
        
        
                print(name.text.strip()[5:])
                print(name.text.strip()[:4])
                print(price.text.strip()[1:].replace(',',''))
                print(mileage.text.strip()[:-4].replace(',',''))
                print(soup2.find_all("dd")[6].text.strip())
                print(link)
                print(pic['src'])
                #print(pic)
        
            website = requests.get(url)
            soup = BeautifulSoup(website.content, "html.parser")
            car_info = soup.find_all('div', class_="vehicle-card-main js-gallery-click-card")
            
        

        dfzip = list(zip(carnumber,carmake,carname,caryear,carprice,carengine,carmiles,carlink,carpic))
        cardata = pd.DataFrame(dfzip, columns = ['number','carmake','name','year','price','engine','miles','link','image'])

        cardata.to_csv('testcardata.csv', index=False)
        return cardata


test = cars_com_scrape()