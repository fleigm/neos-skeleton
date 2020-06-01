import 'alpinejs'

window.dropdown = function () {
	return {
		show: false,

		open() {
			this.show = true;
		},
		close() {
			this.show = false;
		},
		toggle() {
			this.isOpen() ? this.close() : this.open();
		},
		isOpen() {
			return this.show;
		}
	}
}
