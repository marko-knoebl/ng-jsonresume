# What is ng-jsonresume?

ng-jsonresume lets you include a resume into a webpage by using an Angular directive and providing data in the standardized jsonresume format.

It provides a custom HTML tag that can be used like this:

`<resume resume-url="myresume.json" template-url="resume-template-flat.html"></resume>`

# Installation and use

In order to use ng-jsonresume you will need the files ng-jsonresume.js, a template file (resume-template-flat.html is the only one available at the moment) and your own json resume file.

You can get the first two files from the git repository or install them using bower:

`bower install ng-jsonresume`

You will have to create the json file yourself by filling in your personal resume data - see http://jsonresume.org for the data format.

You can see an example of ng-jsonresume in action at https://rawgit.com/marko-knoebl/ng-jsonresume/master/example.html
