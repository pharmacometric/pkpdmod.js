# pkmod.js
A lightweight and performant pharmacometric diagram builder for all purposes


# example code and output

### Include the script at the top of your HTML file

```HTML

<script src="src/pkpdmod.js" ></script>

```

### Create and instance of the PKPDmod class



```js
const pkpd1 = new PKPDmod("test_container");

```

### code 1

```js
const pkpd1 = new PKPDmod("test_container");
pkpd1.lib$3cmt({
    depot: !0,
    bolus: 1, bgcol: "white",
    txtcol: "red", circle: false
})

```

### output 1

![](https://pharmacometric.com/assets/3cmt.png)

### code 2

```
pkpd1.lib$3cmt({
    depot: !0,
    bolus: 1, bgcol: "white",
    txtcol: "blue", circle: true
})

```

### output 2

![](https://pharmacometric.com/assets/3cmt_r.png)