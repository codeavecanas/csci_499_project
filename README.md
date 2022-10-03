# csci_499_project

# Django configuration
- Clone the repo
- Install virtualenv using pip3 or brew (check online as i guess you have different machine)
- Check if you are succesfully install virtualenv by running "which virtualenv"
- Create virtual environment by running "virtualenv env" if it doesnt already exist
- Activate virtual environment by running "source env/bin/activate"
- run "pip3 install -r requirements.txt"

# React configuration
- cd frontend
- npm install
- npm run build

Finally cd to root directory then run:
python3 manage.py runserver

# log into django admin
- python3 manage.py createsuperuser
- python3 manage.py runserver
- got to http://127.0.0.1:8000/admin

# github command (TEAM)

- Git branch (to check branch)
- Git checkout master branch
- git pull origin master (to have file locally)
- git checkout -b your_barnch (to create a new branch and checkout)
- Git add .
- Git commit -m “initial commit”
- Git push origin your_branch

- Go on On GitHub 
- Click compare & pull request your_branch
- Leave comment if needed
- Create a pull request
- Request a review 
- Assign team member to review your code (to see if  we can change something)

- Team members can comment my code

- If all happy, we can merge pull request and confirm merge on github ( this will allow each to pull request localy)

- you can delete your_branch if needed because its already merge

- Start over again
- Git checkout master branch
- Git pull origin master (to have all the merged branches locally). VERY IMPORTTANT AS IT WILL ALLOW EACH ONE TEST YOUR APP LOCALLY

YOU ARE ALL SET
