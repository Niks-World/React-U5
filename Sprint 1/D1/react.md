# Declarative and Imperative

```html
<div> 

    <img src="link.com">

</div>
```

- let container = document.createElement("div")
- let img = document.createElement("img")
- img.src = "link.com"
- container.append(img)
- body.append(container)

P2

- Vanilla JS
- Imperative


---

- let url = "link.com"

- <div> <img src={url}> </div> ! => 

P1

- react JS 
- Declarative

---

# steps towards Adding React

1. CDN of React => 2 src
2. Babel => 1 src
3. react + babel => 3
4. ```jsx<script type="text/babel" >```
5. root => ReactDOM.createRoot(Reference)
6. root.render( html code that you wanna show on UI )