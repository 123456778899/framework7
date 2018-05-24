import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-swipeout-button',
  props: {
    id: [
      String,
      Number
    ],
    text: String,
    confirmText: String,
    overswipe: Boolean,
    close: Boolean,
    delete: Boolean,
    href: String,
    ...Mixins.colorProps
  },
  render() {
    const _h = this.$createElement;
    this.onClick = this.onClick.bind(this);
    return _h('a', {
      style: this.props.style,
      class: this.classes,
      on: { click: this.onClick },
      attrs: {
        href: this.props.href || '#',
        id: this.props.id,
        'data-confirm': this.props.confirmText || undefined
      }
    }, [this.$slots['default'] || [this.props.text]]);
  },
  computed: {
    classes() {
      return Utils.classNames(this.props.className, {
        'swipeout-overswipe': this.props.overswipe,
        'swipeout-delete': this.props.delete,
        'swipeout-close': this.props.close
      }, Mixins.colorClasses(this));
    },
    props() {
      return __vueComponentProps(this);
    }
  },
  methods: {
    onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }
  }
};