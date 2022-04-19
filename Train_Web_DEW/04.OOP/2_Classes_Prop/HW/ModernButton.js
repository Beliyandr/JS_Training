class ModernButton extends Button {
  borderRadius = 0;
  constructor(width, height, background, value, borderRadius) {
    super(width, height, background, value);
    this.borderRadius = borderRadius;
  }
  render() {
    let button = document.createElement("button");
    button.style.width = this.width + "px";
    button.style.height = this.height + "px";
    button.style.background = this.background;
    button.innerHTML = this.value;
    button.style.borderRadius = this.borderRadius + "px";
    return button;
  }
}
