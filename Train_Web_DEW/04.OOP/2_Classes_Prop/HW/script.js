let redButton = new Button(100, 50, "red", "buy").render();
let greenButton = new ModernButton(100, 50, "green", "buy", 50).render();
let body = document.querySelector("body");

body.append(redButton);
body.append(greenButton);
