# pkpdmod.js (version 1.0.1)
A lightweight and performant pharmacometric diagram builder for all purposes

# Project link (when finished)

 - https://pkmodjs.pharmacometric.com/

# Example code and output

### Include the script at the top of your HTML file

```HTML

<script src="src/pkpdmod.min.js" ></script>

```

### Create and instance of the PKPDmod class



```js
const pkpd1 = new PKPDmod("test_container");

```

### code 1

```js
pkpd1.lib$3cmt({ 
depot: true, 
bolus: true, 
delay: true, 
bgcol: "white", 
txtcol: "red", 
circle: false })

```

### output 1

![](https://pharmacometric.com/assets/3cmt.png)

### code 2

```js
pkpd1.lib$3cmt({ 
depot: true, 
bolus: true, 
delay: true, 
bgcol: "white", 
txtcol: "blue", 
circle: true })
```

### output 2

![](https://pharmacometric.com/assets/3cmt_r.png)