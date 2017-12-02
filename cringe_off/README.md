# Cringe Off.


### Step 1: Setting up the files

To start, create two files: ```index.html``` ```styles.css```

Next, open the ```index.html``` file. First, we will declare a doctype. We’re using html as our coding language, so we will type ```<!DOCTYPE HTML>```. 

Now, we will create the shell of the webpage. Start with the ```<html>``` tag. Inside the html tag, put a ```<head>``` tag and a ```<body>``` tag. Your file should look like this: 

```html
<!DOCTYPE HTML>
<html>
	<head></head>
	<body></body>
</html>
```

### Step 2: Setting up the header

The ```<head>``` tag contains head elements. Pretty self-explanatory, right?

Head elements are generally things such as ```<title>``` or ```<link>```. 
</br> The ```<title>``` tag is required on all HTML webpages, and defines the title of the webpage. It's the name you see on a new tab, such as "Roslyn Code" on roslyncode.tech.
</br> The ```<link>``` tag is generally used to link your CSS and JavaScript files to the HTML document.

Let's use the ```<title>``` and ```<link>``` tags now.

I'll be making my title "Cringey Website."

As you can see below, there's more we have to add to the ```<link>``` tag. Sadly, it's not just simply ```<link></link>```.
</br> Generally, when linking a CSS file, we state the relationship of the CSS file first as a stylesheet. This is represented by ```rel="stylesheet"```.
</br> Next, to show that the file we're linking is a CSS file, we state that the ```type="text/css"```.
</br> Finally, to actually link the CSS file, we type ```href="styles.css"```.

```html
<!DOCTYPE HTML>
<html>
	<head>
		<title>Cringey Website.</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
	</head>
	<body></body>
</html>
```

Congrats, now you know how to make a title for your webpage and link a stylesheet! 
</br> Note: Your code will work without ```rel="stylesheet"``` and ```type="text/css"```, but it's generally recommended to keep it.

### Step 3: Adding fonts

Everyone knows we can't have a cringey website without some Comic Sans!
</br> But before we can start customizing fonts, we need some words on our page. Let's write a funny joke inside our ```<body>``` tag.

To add some words on the page, I'll be using an ```<h1>``` tag, but you could just as easily use a ```<p>``` tag.

```html
<!DOCTYPE HTML>
<html>
	<head>
		<title>Cringey Website.</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
	</head>
	<body>
		<h1>AP European History</h1>
	</body>
</html>
```
Now that we have our funny joke on our page, let's go edit our ```styles.css``` file.

Double click your ```styles.css``` file to get started. 
</br>To change the font of our words, we'll have to use ```font-family: "Comic Sans MS";```
</br>In my case, I want to change the font of the words inside my ```<h1>``` tag.

```css
h1 {
	font-family: "Comic Sans MS";
}
```
Luckily for us, Comic Sans is a CSS Web Safe Font, meaning that we didn't have to do anything too fancy to add it.

*But... what if I want a fancier font?*
</br> Don't you worry, sir! Father Google has come to our rescue. If you go to <a href="https://fonts.google.com" target="_blank">fonts.google.com</a>, they have nearly every font you could possibly want.

Scroll down and find a font you like. Once you've found one, or a few, click the red circle with a plus sign. 
</br> Now, click the black bar on the bottom of the site that says "1 Family Selected."
</br> How lucky! It tells us exactly what to copy and paste into our HTML and CSS.

I personally chose the font Chewy.
</br>My updated code now looks like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Cringe Off!</title>
        <link href="styles.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet">
    </head>
    <body>
        <h1>AP European History</h1>
    </body>
</html>
```

```css
h1 {
    font-family: "Chewy";
}
```
Now I know what you're thinking. "Yeah, fonts are fun and all, but this isn't nearly cringey enough for my liking." 

And you're right. 
### Step 4: Adding GIFs
Ahh, finally. 
There are a few ways we could add gifs to our page. I'll go over two ways.

##### First Way:

Go to <a href="https://giphy.com" target="_blank">giphy.com</a>.
##### Second Way: