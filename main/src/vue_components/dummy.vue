<template>
	<div>
		<slot />
	</div>
</template>

<script>
	export default {
		name: "dummy",
		data() {
			children: []
		},

		mounted() {
			let parent = this.$el.parentElement;
			this.children = Array.from(this.$el.childNodes);

			let attrs = Array.from(this.$el.attributes);

			parent.removeChild(this.$el);

			for(let node of this.children) {
				parent.appendChild(node);

				if(node.nodeType === document.ELEMENT_NODE) {
					for(let attr of attrs) {
						node.setAttribute(attr.nodeName, attr.nodeValue);
					}

					// Set data-v for children
					for(let child of node.children) {
						for(let attr of attrs) {
							if(attr.nodeName.startsWith("data-v-")) {
								child.setAttribute(attr.nodeName, attr.nodeValue);
							}
						}
					}
				}
			}
		},

		destroyed() {
			for(let child of this.children) {
				child.parentNode.removeChild(child);
			}
		}
	}
</script>