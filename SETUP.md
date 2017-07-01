Setup
========

This project is a node.js/gulp backed project. The setup is a bit tricky but 
once it is working it should be very easy to rapidly test new ideas and designs

1. Install Node
    1. Install node version manager. Follow the instructions on the install page
        - For OSX/Linux, use NVM: https://github.com/creationix/nvm#installation
        - For Windows, use Nodist: https://github.com/marcelklehr/nodist
    2. The version of node shouldn't matter. If you are having problems, a working version is v7.9.0
2. Download/Clone this Repository
    - `git clone https://github.com/blahoink/igem2017`
    - If you don't have git:
        - OSX: `brew install git`
        - Windows: Download git-scm: https://git-scm.com/download/win
    - Of course, you can download the repository as a .zip file and then edit it manually, 
    but that way it isn't as easy to make and share changes
3. Install Dependencies
    - navigate to the repository in your console `cd igem2017`
    - `npm install` (this might take a while)
    - `npm install -g gulp`
4. Run the Server
    - in the folder, run `gulp`
    - if you get an `EACCES` error, then try running `sudo gulp` (OSX only)
         - for windows, you'll have to run your console/shell in administrator mode
    - navigate to `http://localhost:8080/home.html` in your browser to see if it works
