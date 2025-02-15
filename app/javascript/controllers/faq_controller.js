import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["question", "answer", "icon"];

  toggle(event) {
    const index = this.questionTargets.indexOf(event.currentTarget);
    const answer = this.answerTargets[index];
    const icon = this.iconTargets[index];

    const isHidden = answer.classList.contains("hidden");
    
    // Hide all answers before toggling the clicked one
    this.answerTargets.forEach((el) => el.classList.add("hidden"));
    this.iconTargets.forEach((el) => (el.textContent = "+"));

    if (isHidden) {
      answer.classList.remove("hidden");
      icon.textContent = "-";
    }
  }
}
