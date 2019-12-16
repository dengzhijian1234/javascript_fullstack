<template>
  <div>
    <label>
      <div>
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import Emitter from "../../mimins/emitter";
import AsyncValidator from "async-validator";
export default {
  name: "iFormItem",
  inject: ["form"],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validateState: "",
      validateMessage: ""
    };
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  // 组件渲染， 将实例缓存到Form中
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      // 设置初始值， 方便在重置的时候回复默认值
      this.initialValue = this.fieldValue
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFeildBlur);
      this.$on("on-form-change", this.onFeildChange);
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    }
  }
};
</script>

<style>
</style>