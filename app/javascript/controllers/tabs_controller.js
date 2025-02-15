import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tab", "panel"]

  connect() {
    this.showPanel(0);
  }

  showPanel(index) {
    console.log(index);
    this.tabTargets.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === index);
      tab.setAttribute("tabindex", i === index ? "0" : "-1");
      if (i === index) {
        tab.classList.add("selectedTab");
      } else {
        tab.classList.remove("selectedTab");
      }
    });

    this.panelTargets.forEach((panel, i) => {
      panel.style.display = i === index ? "block" : "none";
      panel.hidden = i !== index;
      panel.setAttribute("tabindex", i === index ? "0" : "-1");
    });
  }

  selectTab(event) {
    console.log(event.currentTarget);
    const index = this.tabTargets.indexOf(event.currentTarget);
    this.showPanel(index);
  }
}