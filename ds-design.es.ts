var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, renderSlot, createTextVNode, useCssVars, ref, watch, toDisplayString, onUnmounted, Fragment, pushScopeId, popScopeId, renderList, withDirectives, vModelDynamic, vModelRadio } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$d = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$i = ["loading"];
const _hoisted_2$g = { class: "flex-r-c" };
const _hoisted_3$a = ["width", "height"];
const _hoisted_4$7 = ["fill"];
const _hoisted_5$5 = ["fill"];
const _hoisted_6$4 = /* @__PURE__ */ createTextVNode("\u6309\u94AE");
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  props: {
    type: { default: "default" },
    size: { default: "normal" },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(`ds-btn t-${__props.type ? __props.type : "default"} s-${__props.size ? __props.size : "normal"}`),
        loading: __props.loading,
        style: normalizeStyle({ opacity: __props.loading ? "0.7" : "1" })
      }, [
        createElementVNode("div", _hoisted_2$g, [
          __props.loading ? (openBlock(), createElementBlock("svg", {
            key: 0,
            t: "1652083399997",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2947",
            width: __props.size === "large" ? "20" : __props.size === "small" ? "13" : "15",
            height: __props.size === "large" ? "20" : __props.size === "small" ? "13" : "15"
          }, [
            createElementVNode("path", {
              d: "M523.39815 1023.534769a511.75366 511.75366 0 1 1 396.376471-837.41508 519.662581 519.662581 0 0 1 46.52306 67.458437 46.52306 46.52306 0 1 1-80.484894 46.52306A418.70754 418.70754 0 1 0 197.736729 776.497321a418.70754 418.70754 0 0 0 576.420714 70.24982 46.52306 46.52306 0 1 1 55.827672 74.436896A511.75366 511.75366 0 0 1 523.39815 1023.534769z",
              fill: __props.type === "normal" ? "black" : "#ffffff95",
              "p-id": "2948"
            }, null, 8, _hoisted_4$7),
            createElementVNode("path", {
              d: "M772.761752 290.331343l201.444849-164.691632a23.26153 23.26153 0 0 1 37.683679 20.470146l-18.609224 182.835626a23.26153 23.26153 0 0 1-25.587683 20.935377l-182.835626-18.609224a23.26153 23.26153 0 0 1-12.095995-40.940293z",
              fill: __props.type === "normal" ? "black" : "#ffffff95",
              "p-id": "2949"
            }, null, 8, _hoisted_5$5)
          ], 8, _hoisted_3$a)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_6$4
          ], true)
        ])
      ], 14, _hoisted_1$i);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-ed887ba8"]]);
Button.name = "ds-button";
Button.install = (app) => {
  app.component(Button.name, Button);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$c = "";
const _hoisted_1$h = /* @__PURE__ */ createTextVNode("home");
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "16px" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2238177a": size.value
    }));
    const ddRef = ref();
    const size = ref(props.size);
    watch(() => props.size, () => size.value = props.size);
    onMounted(() => {
      if (ddRef.value.children) {
        ddRef.value.children[0].firstChild.innerText = "";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("dl", {
        ref_key: "ddRef",
        ref: ddRef,
        class: "ds-breadcrumb"
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_1$h
        ], true)
      ], 512);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-0ca05105"]]);
Breadcrumb.name = "ds-breadcrumb";
Breadcrumb.install = (app) => {
  app.component(Breadcrumb.name, Breadcrumb);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$b = "";
const _hoisted_1$g = { class: "ds-breadcrumb-item" };
const _hoisted_2$f = { style: { "margin-right": "10px" } };
const _hoisted_3$9 = ["href"];
const _hoisted_4$6 = /* @__PURE__ */ createTextVNode("black hot drink");
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  props: {
    separator: { default: "/" },
    href: { default: "javascript:" },
    color: { default: "#333333" },
    activeColor: { default: "#338eff" },
    hoverColor: { default: "#338eff" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "ee53db2e": color.value,
      "831a277e": hoverColor.value,
      "0c673a83": activeColor.value
    }));
    const color = ref(props.color);
    const activeColor = ref(props.activeColor);
    const hoverColor = ref(props.hoverColor);
    watch(() => props.color, () => color.value = props.color);
    watch(() => props.activeColor, () => activeColor.value = props.activeColor);
    watch(() => props.hoverColor, () => hoverColor.value = props.hoverColor);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("dd", _hoisted_1$g, [
        createElementVNode("span", _hoisted_2$f, toDisplayString(__props.separator), 1),
        createElementVNode("a", { href: __props.href }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_4$6
          ], true)
        ], 8, _hoisted_3$9)
      ]);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-44aa4778"]]);
BreadcrumbItem.name = "ds-breadcrumb-item";
BreadcrumbItem.install = (app) => {
  app.component(BreadcrumbItem.name, BreadcrumbItem);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$a = "";
const _hoisted_1$f = {
  key: 0,
  class: "ds-divider"
};
const _hoisted_2$e = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4");
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  props: {
    color: { default: "#33c0bb" },
    width: { default: "1px" },
    withText: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    height: { default: "80%" },
    type: { default: "solid" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "3e0cbf0e": width.value,
      "3cf5c0ab": color.value,
      "90a6961c": type.value
    }));
    const textRef = ref();
    const divRef = ref();
    const color = ref(props.color);
    const width = ref(props.width);
    const type = ref(props.type);
    const hrWidth = ref(0);
    watch(() => props.color, () => color.value = props.color);
    watch(() => props.width, () => width.value = props.width);
    watch(() => props.type, () => type.value = props.type);
    onMounted(() => {
      if (props.withText) {
        getHrWidth();
        addEventListener("resize", getHrWidth);
      }
    });
    onUnmounted(() => {
      removeEventListener("resize", getHrWidth);
    });
    const getHrWidth = () => {
      hrWidth.value = (divRef.value.clientWidth - textRef.value.clientWidth - 16) / 2;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !__props.withText && !__props.vertical ? (openBlock(), createElementBlock("hr", _hoisted_1$f)) : createCommentVNode("", true),
        __props.withText && !__props.vertical ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "divRef",
          ref: divRef,
          style: { "display": "inline-flex", "flex-direction": "row", "align-items": "center", "justify-content": "center", "width": "calc(100%)" }
        }, [
          createElementVNode("hr", {
            class: "ds-divider",
            style: normalizeStyle([{ "display": "inline-flex" }, { width: hrWidth.value + "px" }])
          }, null, 4),
          createElementVNode("span", {
            ref_key: "textRef",
            ref: textRef,
            style: { "padding": "0 8px", "white-space": "nowrap" }
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              _hoisted_2$e
            ], true)
          ], 512),
          createElementVNode("hr", {
            class: "ds-divider",
            style: normalizeStyle([{ "display": "inline-flex" }, { width: hrWidth.value + "px" }])
          }, null, 4)
        ], 512)) : createCommentVNode("", true),
        __props.vertical ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "divider-v",
          style: normalizeStyle({ height: __props.height })
        }, null, 4)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-64934d60"]]);
Divider.name = "ds-divider";
Divider.install = (app) => {
  app.component(Divider.name, Divider);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$9 = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-29166dae"), n = n(), popScopeId(), n);
const _hoisted_1$e = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", { class: "ds-switch-hendel" }, null, -1));
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    checkedText: { default: "" },
    uncheckedText: { default: "" },
    size: { default: "normal" }
  },
  emits: ["switch"],
  setup(__props, { emit: emits }) {
    const checked = ref(false);
    const switchHandel = () => {
      checked.value = !checked.value;
      emits("switch", checked.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["ds-switch", checked.value ? "ds-switch-checked" : ""]),
        onClick: switchHandel,
        style: normalizeStyle({
          "background-color": checked.value ? "#338eff" : "#00000040",
          transform: __props.size === "small" ? "scale(.7, .7)" : __props.size === "large" ? "scale(1.3, 1.3)" : "scale(1, 1)"
        })
      }, [
        _hoisted_1$e,
        __props.checkedText && __props.uncheckedText ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["ds-switch-text", checked.value ? "ds-switch-text-checked" : "ds-switch-text-unchecked"])
        }, toDisplayString(checked.value ? __props.checkedText : __props.uncheckedText), 3)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-29166dae"]]);
Switch.name = "ds-switch";
Switch.install = (app) => {
  app.component(Switch.name, Switch);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$8 = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-c729bfac"), n = n(), popScopeId(), n);
const _hoisted_1$d = ["value", "placeholder"];
const _hoisted_2$d = ["width", "height"];
const _hoisted_3$8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z",
  fill: "#8a8a8a",
  "p-id": "3563"
}, null, -1));
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M557.254 512l147.373-147.373c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0L512 466.746 364.627 319.373c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255L466.746 512 319.373 659.373c-12.497 12.496-12.497 32.758 0 45.254C325.621 710.876 333.811 714 342 714s16.379-3.124 22.627-9.373L512 557.254l147.373 147.373C665.621 710.876 673.811 714 682 714s16.379-3.124 22.627-9.373c12.497-12.496 12.497-32.758 0-45.254L557.254 512z",
  fill: "#8a8a8a",
  "p-id": "3564"
}, null, -1));
const _hoisted_5$4 = [
  _hoisted_3$8,
  _hoisted_4$5
];
const _hoisted_6$3 = ["width", "height"];
const _hoisted_7$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M65.409221 340.948229c42.307571-35.385928 65.340147-52.599985 106.850563-88.881306 145.652288 142.907781 145.652288 142.907781 339.739704 331.683215 120.79925-111.760386 223.503377-215.061101 339.745844-322.608535 35.456536 31.605835 69.40472 61.860906 106.844423 95.232968-150.207024 139.312906-298.090119 276.471752-448.054619 415.557484-10.259668-9.280364-19.784602-17.652032-29.03529-26.319435L65.409221 340.948229z",
  "p-id": "2453",
  fill: "#8a8a8a"
}, null, -1));
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$2 = ["onClick"];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: "" },
    name: { default: "select" },
    id: { default: "ds-select" },
    options: { default: () => [
      { label: "\u9009\u98791", value: "\u9009\u98791" },
      { label: "\u9009\u98792", value: "\u9009\u98792" }
    ] },
    size: { default: "normal" },
    clearable: { type: Boolean, default: false },
    placeholder: { default: "\u8BF7\u9009\u62E9" }
  },
  emits: ["select", "update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const options = ref(props.options);
    const selectValue = ref(props.modelValue);
    const visible = ref(false);
    const closeVisible = ref(props.clearable);
    const dropDownVisible = ref(true);
    watch(() => props.options, () => options.value = props.options);
    watch(() => props.modelValue, () => selectValue.value = props.modelValue);
    watch(() => props.clearable, () => closeVisible.value = props.clearable);
    const itemSelect = (value, label) => {
      visible.value = false;
      selectValue.value = value;
      emits("update:modelValue", value);
      emits("select", value, label);
    };
    const dropDownOver = () => {
      if (selectValue.value) {
        closeVisible.value = true;
        dropDownVisible.value = false;
      }
    };
    const dropDownLeave = () => {
      closeVisible.value = false;
      dropDownVisible.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`ds-select select-s-${__props.size}`),
        onMouseover: dropDownOver,
        onMouseleave: dropDownLeave
      }, [
        createElementVNode("input", {
          value: selectValue.value,
          class: normalizeClass(`select-input select-i-${__props.size}`),
          type: "text",
          readonly: "",
          placeholder: __props.placeholder,
          onClick: _cache[0] || (_cache[0] = ($event) => visible.value = !visible.value)
        }, null, 10, _hoisted_1$d),
        closeVisible.value && !dropDownVisible.value ? (openBlock(), createElementBlock("svg", {
          key: 0,
          t: "1652235603744",
          class: "select-icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3562",
          width: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          height: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          onClick: _cache[1] || (_cache[1] = ($event) => {
            selectValue.value = "";
            closeVisible.value = false;
            dropDownVisible.value = true;
          })
        }, _hoisted_5$4, 8, _hoisted_2$d)) : createCommentVNode("", true),
        dropDownVisible.value ? (openBlock(), createElementBlock("svg", {
          key: 1,
          t: "1652169643316",
          class: "select-icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2452",
          width: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          height: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          onClick: _cache[2] || (_cache[2] = ($event) => visible.value = !visible.value)
        }, _hoisted_8$3, 8, _hoisted_6$3)) : createCommentVNode("", true),
        visible.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(`select-option select-o-${__props.size}`),
          onMouseleave: _cache[3] || (_cache[3] = ($event) => visible.value = false)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (i, index2) => {
            return openBlock(), createElementBlock("span", {
              class: normalizeClass(["select-item", i.value == selectValue.value ? "bg-color" : ""]),
              key: index2,
              onClick: ($event) => itemSelect(i.value, i.label)
            }, toDisplayString(i.value), 11, _hoisted_9$2);
          }), 128))
        ], 34)) : createCommentVNode("", true)
      ], 34);
    };
  }
});
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-c729bfac"]]);
Select.name = "ds-select";
Select.install = (app) => {
  app.component(Select.name, Select);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$7 = "";
const _withScopeId = (n) => (pushScopeId("data-v-e1ee64a8"), n = n(), popScopeId(), n);
const _hoisted_1$c = { style: { "display": "inline-flex", "position": "relative", "align-items": "center" } };
const _hoisted_2$c = ["type", "placeholder"];
const _hoisted_3$7 = ["width", "height"];
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z",
  fill: "#8a8a8a",
  "p-id": "3563"
}, null, -1));
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M557.254 512l147.373-147.373c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0L512 466.746 364.627 319.373c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255L466.746 512 319.373 659.373c-12.497 12.496-12.497 32.758 0 45.254C325.621 710.876 333.811 714 342 714s16.379-3.124 22.627-9.373L512 557.254l147.373 147.373C665.621 710.876 673.811 714 682 714s16.379-3.124 22.627-9.373c12.497-12.496 12.497-32.758 0-45.254L557.254 512z",
  fill: "#8a8a8a",
  "p-id": "3564"
}, null, -1));
const _hoisted_6$2 = [
  _hoisted_4$4,
  _hoisted_5$3
];
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  t: "1652149456835",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1990",
  width: "20",
  height: "20"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z",
    fill: "#ffffff",
    "p-id": "1991"
  })
], -1));
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "normal" },
    placeholder: { default: "\u8BF7\u8F93\u5165..." },
    withSearch: { type: Boolean, default: false }
  },
  emits: ["input", "search", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const value = ref(props.modelValue);
    const inpRef = ref();
    onMounted(() => {
    });
    watch(() => props.modelValue, () => value.value = props.modelValue);
    const search = (value2) => {
      emit("update:modelValue", value2);
      emit("input", value2);
    };
    const handleSearch = (value2) => {
      inpRef.value.focus();
      emit("update:modelValue", value2);
      emit("search", value2);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          class: normalizeClass(`ds-input input-s-${__props.size ? __props.size : "normal"}`),
          type: __props.type ? __props.type : "text",
          placeholder: __props.placeholder,
          onInput: _cache[1] || (_cache[1] = ($event) => search(value.value)),
          ref_key: "inpRef",
          ref: inpRef
        }, null, 42, _hoisted_2$c), [
          [vModelDynamic, value.value]
        ]),
        value.value !== "" ? (openBlock(), createElementBlock("svg", {
          key: 0,
          t: "1652235603744",
          class: "select-icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3562",
          width: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          height: __props.size === "normal" ? "17" : __props.size === "small" ? "14" : "19",
          onClick: _cache[2] || (_cache[2] = ($event) => value.value = ""),
          style: normalizeStyle([{ "z-index": "100", "background-color": "#fff" }, { right: __props.size === "small" && __props.withSearch ? "50px" : __props.size === "normal" && __props.withSearch ? "60px" : __props.size === "large" && __props.withSearch ? "70px" : "14px" }])
        }, _hoisted_6$2, 12, _hoisted_3$7)) : createCommentVNode("", true),
        __props.withSearch ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: normalizeClass(`ds-btn s-${__props.size ? __props.size : "normal"}`),
          onClick: _cache[3] || (_cache[3] = ($event) => handleSearch(value.value))
        }, _hoisted_8$2, 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-e1ee64a8"]]);
Input.name = "ds-input";
Input.install = (app) => {
  app.component(Input.name, Input);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    row: { default: 12 },
    gap: { default: "0px" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "37281cbc": gap.value
    }));
    const gap = ref(props.gap);
    const dsRowStyle = ref({ gridTemplateColumns: `repeat(${props.row}, 1fr)` });
    watch(() => props.gap, () => gap.value = props.gap);
    watch(() => props.row, () => dsRowStyle.value = { gridTemplateColumns: `repeat(${props.row}, 1fr)` });
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "ds-row",
        style: normalizeStyle(dsRowStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-3bb63312"]]);
Row.name = "ds-row";
Row.install = (app) => {
  app.component(Row.name, Row);
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    span: { default: 12 }
  },
  setup(__props) {
    const props = __props;
    const dsColStyle = ref({ gridColumnStart: `span ${props.span}` });
    watch(() => props.span, () => dsColStyle.value = { gridColumnStart: `span ${props.span}` });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "ds-col",
        style: normalizeStyle(dsColStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
_sfc_main$d.name = "ds-col";
_sfc_main$d.install = (app) => {
  app.component(_sfc_main$d.name, _sfc_main$d);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const _hoisted_1$b = {
  key: 0,
  class: "ds-layout"
};
const _hoisted_2$b = { class: "ds-layout-sider" };
const _hoisted_3$6 = { class: "ds-layout-main" };
const _hoisted_4$3 = { class: "ds-layout-header" };
const _hoisted_5$2 = { class: "ds-layout-content" };
const _hoisted_6$1 = { class: "ds-layout-footer" };
const _hoisted_7$1 = {
  key: 1,
  class: "ds-layout2"
};
const _hoisted_8$1 = { class: "ds-layout-header" };
const _hoisted_9$1 = { class: "ds-layout-main" };
const _hoisted_10 = { class: "ds-layout-sider" };
const _hoisted_11 = { class: "ds-layout-content" };
const _hoisted_12 = { class: "ds-layout-footer" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    type: { default: "1" }
  },
  setup(__props) {
    const props = __props;
    const type = ref(props.type);
    watch(() => props.type, () => type.value = props.type);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        type.value === "1" ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
          createElementVNode("div", _hoisted_2$b, [
            renderSlot(_ctx.$slots, "sider", {}, void 0, true)
          ]),
          createElementVNode("div", _hoisted_3$6, [
            createElementVNode("div", _hoisted_4$3, [
              renderSlot(_ctx.$slots, "header", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_5$2, [
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_6$1, [
              renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])
          ])
        ])) : createCommentVNode("", true),
        type.value === "2" ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
          createElementVNode("div", _hoisted_8$1, [
            renderSlot(_ctx.$slots, "header", {}, void 0, true)
          ]),
          createElementVNode("div", _hoisted_9$1, [
            createElementVNode("div", _hoisted_10, [
              renderSlot(_ctx.$slots, "sider", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_11, [
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ])
          ]),
          createElementVNode("div", _hoisted_12, [
            renderSlot(_ctx.$slots, "footer", {}, void 0, true)
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-0ba155af"]]);
Layout.name = "ds-layout";
Layout.install = (app) => {
  app.component(Layout.name, Layout);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$a = /* @__PURE__ */ createTextVNode("Hover Me");
const _hoisted_2$a = {
  t: "1652929865641",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1976",
  width: "16",
  height: "16"
};
const _hoisted_3$5 = ["fill"];
const _hoisted_4$2 = {
  key: 0,
  class: "ds-dropdown-list"
};
const _hoisted_5$1 = ["href"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    color: { default: "#333" },
    options: { default: [
      {
        link: "",
        text: ""
      }
    ] }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "6674d471": color.value
    }));
    const color = ref(props.color);
    const options = ref(props.options);
    watch(() => props.color, () => color.value = props.color);
    watch(() => props.options, () => options.value = props.options);
    const visible = ref(false);
    const showList = () => {
      visible.value = true;
    };
    const unshowlist = () => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "ds-dropdown",
        onMouseover: showList,
        onMouseleave: unshowlist
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_1$a
        ], true),
        (openBlock(), createElementBlock("svg", _hoisted_2$a, [
          createElementVNode("path", {
            d: "M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z",
            "p-id": "1977",
            fill: color.value
          }, null, 8, _hoisted_3$5)
        ])),
        visible.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (i, index2) => {
            return openBlock(), createElementBlock("a", {
              key: index2,
              href: i.link ? i.link : "javascript:;"
            }, "\xA0\xA0\xA0\xA0" + toDisplayString(i.text ? i.text : ""), 9, _hoisted_5$1);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 32);
    };
  }
});
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-70b0aea2"]]);
Dropdown.name = "ds-dropdown";
Dropdown.install = (app) => {
  app.component(Dropdown.name, Dropdown);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    activeIndex: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const menuRef = ref();
    const activeIndex = ref(props.activeIndex);
    watch(() => props.activeIndex, () => {
      activeIndex.value = props.activeIndex;
      const childrens = Array(...menuRef.value.children);
      childrens[activeIndex.value].style.borderBottom = "2px solid #338eff";
      childrens[activeIndex.value].style.color = "#338eff";
      childrens.forEach((item, f) => {
        if (activeIndex.value !== f) {
          item.style.borderBottom = "2px solid #fff";
          item.style.color = "#333";
          if (item.children[0]) {
            const pathChild = Array(...item.children[0].children);
            pathChild.forEach((i) => {
              i.style.fill = "#333";
            });
          }
        }
      });
      if (childrens[activeIndex.value].children[0]) {
        const pathChild = Array(...childrens[activeIndex.value].children[0].children);
        pathChild.forEach((i) => {
          i.style.fill = "#338eff";
        });
      }
    });
    onMounted(() => {
      const childrens = Array(...menuRef.value.children);
      childrens[activeIndex.value].style.borderBottom = "2px solid #338eff";
      childrens[activeIndex.value].style.color = "#338eff";
      childrens.forEach((item, f) => {
        if (activeIndex.value !== f) {
          item.style.borderBottom = "2px solid #fff";
          item.style.color = "#333";
        }
      });
      if (childrens[activeIndex.value].children[0]) {
        const pathChild = Array(...childrens[activeIndex.value].children[0].children);
        pathChild.forEach((i) => {
          i.style.fill = "#338eff";
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        ref_key: "menuRef",
        ref: menuRef,
        class: "ds-menu"
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512);
    };
  }
});
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4a39b917"]]);
Menu.name = "ds-menu";
Menu.install = (app) => {
  app.component(Menu.name, Menu);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$9 = /* @__PURE__ */ createTextVNode("\xA0 ");
const _hoisted_2$9 = /* @__PURE__ */ createTextVNode("Menu");
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode("\xA0 ");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeClass = ref("");
    const handleClick = (e) => {
      if (e.target.localName == "svg")
        return;
      if (!e.target.parentNode.children)
        return;
      const parentNode = Array(...e.target.parentNode.children);
      const index2 = parentNode.indexOf(e.target);
      parentNode[index2].style.borderBottom = "2px solid #338eff";
      parentNode[index2].style.color = "#338eff";
      parentNode.forEach((item, f) => {
        if (f !== index2) {
          item.style.borderBottom = "2px solid #fff";
          item.style.color = "#333";
          if (item.children[0]) {
            const pathChild = Array(...item.children[0].children);
            pathChild.forEach((i) => {
              i.style.fill = "#333";
            });
          }
        } else {
          if (item.children[0]) {
            const pathChild = Array(...item.children[0].children);
            pathChild.forEach((i) => {
              i.style.fill = "#338eff";
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["ds-menu-item", activeClass.value]),
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "icon", {}, void 0, true),
        _hoisted_1$9,
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_2$9
        ], true),
        _hoisted_3$4
      ], 2);
    };
  }
});
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f6e9f438"]]);
MenuItem.name = "ds-menu-item";
MenuItem.install = (app) => {
  app.component(MenuItem.name, MenuItem);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1$8 = ["name", "id", "value"];
const _hoisted_2$8 = ["for"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    option: { default: [{
      lable: "",
      value: ""
    }] },
    name: { default: "radio" },
    checkedColor: { default: "#338eff" },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "92e0ec0e": __props.checkedColor
    }));
    const value = ref(props.modelValue);
    watch(() => props.modelValue, () => value.value = props.modelValue);
    const handelInput = (e) => {
      emits("update:modelValue");
    };
    const handelChange = (e) => {
      emits("change", value.value);
    };
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.option, (item, index2) => {
        return openBlock(), createElementBlock("div", {
          class: "ds-radio",
          key: index2
        }, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            type: "radio",
            name: __props.name,
            id: item.value,
            value: item.value,
            onInput: handelInput,
            onChange: handelChange
          }, null, 40, _hoisted_1$8), [
            [vModelRadio, value.value]
          ]),
          createElementVNode("label", {
            for: item.value
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(item.value), 1)
            ], true)
          ], 8, _hoisted_2$8)
        ]);
      }), 128);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-16480c8c"]]);
Radio.name = "ds-radio";
Radio.install = (app) => {
  app.component(Radio.name, Radio);
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$7 = { class: "ds-carousel" };
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createElementVNode("span", { style: { "font-size": "32px" } }, "1")
], -1);
const _hoisted_3$3 = ["width", "height"];
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z",
  fill: "rgb(255, 255, 255, .75)",
  "p-id": "1968"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4$1
];
const _hoisted_6 = ["width", "height"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M610.88 512L192 93.12 285.12 0l512 512-512 512L192 930.88z",
  fill: "rgb(255, 255, 255, .75)",
  "p-id": "2965"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createElementVNode("div", {
  class: "ds-carousel-dot",
  id: "ds-carousel-dot"
}, null, -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: "100%" },
    height: { default: "200px" },
    time: { default: 1e3 },
    autoplay: { type: Boolean, default: false },
    dots: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7ec3f99a": width.value,
      "3fec3fd3": height.value,
      "191d7b50": carouselListLength.value,
      "19eb701a": carouselWidth.value,
      "423a1edf": opacity.value
    }));
    const size = ref("28");
    const opacity = ref(0);
    const curIndex = ref(0);
    const carousel = ref(0);
    const carouselWidth = ref(props.width);
    const width = ref(props.width);
    const height = ref(props.height);
    const time = ref(props.time);
    const carouselListLength = ref(1);
    const autoplay = ref(props.autoplay);
    const dots = ref(props.dots);
    let timer = null;
    watch(() => props.width, () => width.value = props.width);
    watch(() => props.height, () => height.value = props.height);
    watch(() => props.time, () => time.value = props.time);
    watch(() => props.autoplay, () => autoplay.value = props.autoplay);
    watch(() => props.dots, () => dots.value = props.dots);
    watch(() => carousel.value, () => carouselWidth.value = carousel.value + "px");
    onMounted(() => {
      carousel.value = document.querySelector(".ds-carousel").clientWidth;
      const rightList = document.querySelector(".ds-carousel-list");
      const dotFather = document.querySelector("#ds-carousel-dot");
      let rightListLength = rightList.childNodes.length - 2;
      dotFather.innerHTML = "";
      carouselListLength.value = rightList.childNodes.length - 2;
      carouselWidth.value = carousel.value + "px";
      let MutationObserver = window.MutationObserver;
      let element = document.querySelector(".ds-carousel");
      let observer = new MutationObserver((mutationList) => {
        let width2 = getComputedStyle(element).getPropertyValue("width");
        const rightListCopy = document.querySelector(".ds-carousel-list");
        const rightListCopyLength = rightListCopy.childNodes.length - 2;
        if (carouselWidth.value !== width2) {
          carousel.value = Number(width2.slice(0, width2.indexOf("px")));
          carouselWidth.value = width2;
        }
        if (rightListLength !== rightListCopyLength) {
          dotFather.innerHTML = "";
          for (let i = 0; i < rightListCopy.childNodes.length - 2; i++) {
            const dot = document.createElement("div");
            dot.setAttribute("class", "ds-carousel-dot-item");
            dotFather.appendChild(dot);
            rightListLength = rightListCopyLength;
          }
        }
      });
      observer.observe(element, { attributeFilter: ["style"], attributeOldValue: true });
      for (let i = 0; i < rightList.childNodes.length - 2; i++) {
        const dot = document.createElement("div");
        dot.setAttribute("class", "ds-carousel-dot-item");
        dot.addEventListener("click", function(e) {
          curIndex.value = i - 1;
          rightClick();
          dotFather.childNodes[i].style.backgroundColor = "#fff";
          for (let j = 0; j < dotFather.childNodes.length; j++) {
            if (j !== i) {
              dotFather.childNodes[j].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
            }
          }
          console.log();
        });
        dot.addEventListener("mousemove", function(e) {
          clearInterval(timer);
        });
        dot.addEventListener("mouseleave", function(e) {
          if (autoplay.value) {
            timer = setInterval(() => {
              rightClick();
            }, time.value);
          }
        });
        dotFather.appendChild(dot);
      }
      dotFather.childNodes[curIndex.value].style.backgroundColor = "#fff";
      for (let j = 0; j < dotFather.childNodes.length; j++) {
        if (j !== curIndex.value) {
          dotFather.childNodes[j].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        }
      }
      if (autoplay.value) {
        timer = setInterval(() => {
          rightClick();
        }, time.value);
      }
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    const handleListMove = () => {
      clearInterval(timer);
      opacity.value = 1;
    };
    const handleListLeave = () => {
      if (autoplay.value) {
        timer = setInterval(() => {
          rightClick();
        }, time.value);
      }
      opacity.value = 0;
    };
    const handleMove = () => {
      clearInterval(timer);
      opacity.value = 1;
    };
    const handleLeave = () => {
      if (autoplay.value) {
        timer = setInterval(() => {
          rightClick();
        }, time.value);
      }
    };
    const leftClick = () => {
      const dotFather = document.querySelector("#ds-carousel-dot");
      carousel.value = document.querySelector(".ds-carousel").clientWidth;
      const rightList = document.querySelector(".ds-carousel-list");
      carouselListLength.value = rightList.childNodes.length - 2;
      if (curIndex.value === 0) {
        curIndex.value = rightList.childNodes.length - 2;
      }
      rightList.childNodes[1].style.marginLeft = `${-carousel.value * (curIndex.value - 1)}px`;
      dotFather.childNodes[curIndex.value - 1].style.backgroundColor = "#fff";
      for (let j = 0; j < dotFather.childNodes.length; j++) {
        if (j !== curIndex.value - 1) {
          dotFather.childNodes[j].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        }
      }
      curIndex.value--;
    };
    const rightClick = () => {
      const dotFather = document.querySelector("#ds-carousel-dot");
      carousel.value = document.querySelector(".ds-carousel").clientWidth;
      const rightList = document.querySelector(".ds-carousel-list");
      carouselListLength.value = rightList.childNodes.length - 2;
      if (curIndex.value === rightList.childNodes.length - 3) {
        curIndex.value = -1;
      }
      rightList.childNodes[1].style.marginLeft = `${-carousel.value * (curIndex.value + 1)}px`;
      dotFather.childNodes[curIndex.value + 1].style.backgroundColor = "#fff";
      for (let j = 0; j < dotFather.childNodes.length; j++) {
        if (j !== curIndex.value + 1) {
          dotFather.childNodes[j].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        }
      }
      curIndex.value++;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createElementVNode("div", {
          class: "ds-carousel-list",
          onMousemove: handleListMove,
          onMouseleave: handleListLeave
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_2$7
          ])
        ], 32),
        createElementVNode("div", {
          class: "ds-carousel-left",
          onMousemove: handleMove,
          onMouseleave: handleLeave,
          onClick: leftClick
        }, [
          (openBlock(), createElementBlock("svg", {
            t: "1653273633059",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "1967",
            width: size.value,
            height: size.value
          }, _hoisted_5, 8, _hoisted_3$3))
        ], 32),
        createElementVNode("div", {
          class: "ds-carousel-right",
          onMousemove: handleMove,
          onMouseleave: handleLeave,
          onClick: rightClick
        }, [
          (openBlock(), createElementBlock("svg", {
            t: "1653274034041",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2964",
            width: size.value,
            height: size.value
          }, _hoisted_8, 8, _hoisted_6))
        ], 32),
        _hoisted_9
      ]);
    };
  }
});
_sfc_main$7.name = "ds-carousel";
_sfc_main$7.install = (app) => {
  app.component(_sfc_main$7.name, _sfc_main$7);
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = { class: "ds-table" };
const _hoisted_2$6 = {
  rules: "rows",
  frame: "box",
  cellpadding: "10px",
  width: "100%"
};
const _hoisted_3$2 = ["align"];
const _hoisted_4 = ["align"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    columns: { default: [] },
    dataSource: { default: [] },
    width: { default: "100%" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "e17070f2": width.value
    }));
    const columns = ref(props.columns);
    const dataSource = ref(props.dataSource);
    const width = ref(props.width);
    watch(() => props.columns, () => columns.value = props.columns);
    watch(() => props.dataSource, () => dataSource.value = props.dataSource);
    watch(() => props.width, () => width.value = props.width);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("table", _hoisted_2$6, [
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (i) => {
                return openBlock(), createElementBlock("th", {
                  key: i.dataIndex,
                  align: i.align ? i.align : "left"
                }, toDisplayString(i.title), 9, _hoisted_3$2);
              }), 128))
            ])
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(dataSource.value, (item, index2) => {
              return openBlock(), createElementBlock("tr", {
                key: item.key
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (i) => {
                  return openBlock(), createElementBlock("td", {
                    key: i.dataIndex,
                    align: i.align ? i.align : "left"
                  }, toDisplayString(item[i.dataIndex]), 9, _hoisted_4);
                }), 128))
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-98ae38de"]]);
Table.name = "ds-table";
Table.install = (app) => {
  app.component(Table.name, Table);
};
const _hoisted_1$5 = ["width", "height"];
const _hoisted_2$5 = ["fill"];
const _hoisted_3$1 = ["fill"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652235603744",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "3562",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z",
          fill: __props.color,
          "p-id": "3563"
        }, null, 8, _hoisted_2$5),
        createElementVNode("path", {
          d: "M557.254 512l147.373-147.373c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0L512 466.746 364.627 319.373c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255L466.746 512 319.373 659.373c-12.497 12.496-12.497 32.758 0 45.254C325.621 710.876 333.811 714 342 714s16.379-3.124 22.627-9.373L512 557.254l147.373 147.373C665.621 710.876 673.811 714 682 714s16.379-3.124 22.627-9.373c12.497-12.496 12.497-32.758 0-45.254L557.254 512z",
          fill: __props.color,
          "p-id": "3564"
        }, null, 8, _hoisted_3$1)
      ], 8, _hoisted_1$5);
    };
  }
});
const _hoisted_1$4 = ["width", "height"];
const _hoisted_2$4 = ["fill"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652238946195",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "3770",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M562.281173 510.800685l294.996664-293.466821c13.94971-13.878079 14.020318-36.367279 0.14224-50.316989-13.913894-13.984503-36.367279-14.020318-50.316989-0.14224L512.034792 460.377272 219.528855 166.982082c-13.842263-13.878079-36.367279-13.94971-50.316989-0.071631-13.913894 13.878079-13.948687 36.403095-0.071631 50.352805L461.576587 510.587837 166.721139 803.876604c-13.94971 13.878079-14.020318 36.367279-0.14224 50.316989 6.939039 6.974855 16.084327 10.497075 25.229614 10.497075 9.073656 0 18.148335-3.451612 25.087375-10.354835l294.926056-293.360398 295.17472 296.064996c6.939039 6.974855 16.048511 10.462283 25.193799 10.462283 9.109472 0 18.184151-3.487428 25.12319-10.390651 13.913894-13.878079 13.94971-36.367279 0.071631-50.316989L562.281173 510.800685z",
          "p-id": "3771",
          fill: __props.color
        }, null, 8, _hoisted_2$4)
      ], 8, _hoisted_1$4);
    };
  }
});
const _hoisted_1$3 = ["width", "height"];
const _hoisted_2$3 = ["fill"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652169643316",
        class: "select-icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "2452",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M65.409221 340.948229c42.307571-35.385928 65.340147-52.599985 106.850563-88.881306 145.652288 142.907781 145.652288 142.907781 339.739704 331.683215 120.79925-111.760386 223.503377-215.061101 339.745844-322.608535 35.456536 31.605835 69.40472 61.860906 106.844423 95.232968-150.207024 139.312906-298.090119 276.471752-448.054619 415.557484-10.259668-9.280364-19.784602-17.652032-29.03529-26.319435L65.409221 340.948229z",
          "p-id": "2453",
          fill: __props.color
        }, null, 8, _hoisted_2$3)
      ], 8, _hoisted_1$3);
    };
  }
});
const _hoisted_1$2 = ["width", "height"];
const _hoisted_2$2 = ["fill"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652254220232",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "4744",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z",
          "p-id": "4745",
          fill: __props.color
        }, null, 8, _hoisted_2$2)
      ], 8, _hoisted_1$2);
    };
  }
});
const _hoisted_1$1 = ["width", "height"];
const _hoisted_2$1 = ["fill"];
const _hoisted_3 = ["fill"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652254470050",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "5679",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z",
          "p-id": "5680",
          fill: __props.color
        }, null, 8, _hoisted_2$1),
        createElementVNode("path", {
          d: "M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z",
          "p-id": "5681",
          fill: __props.color
        }, null, 8, _hoisted_3)
      ], 8, _hoisted_1$1);
    };
  }
});
var LoadingOutlined_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "30" },
    color: { default: "#333333" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        t: "1652254779532",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "6514",
        width: __props.size,
        height: __props.size
      }, [
        createElementVNode("path", {
          d: "M512 907c-24.852 0-45-20.148-45-45s20.148-45 45-45c168.446 0 305-136.554 305-305S680.446 207 512 207 207 343.554 207 512c0 24.852-20.148 45-45 45S117 536.852 117 512c0-218.152 176.848-395 395-395S907 293.848 907 512 730.152 907 512 907z",
          "p-id": "6515",
          fill: __props.color
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1);
    };
  }
});
var LoadingOutlined = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ee5f41a"]]);
_sfc_main$5.name = "CloseCircleOutlined";
_sfc_main$4.name = "CloseOutlined";
_sfc_main$3.name = "DownOutlined";
_sfc_main$2.name = "SearchOutlined";
_sfc_main$1.name = "SettingOutlined";
LoadingOutlined.name = "LoadingOutlined";
_sfc_main$5.install = (app) => {
  app.component(_sfc_main$5.name, _sfc_main$5);
};
_sfc_main$4.install = (app) => {
  app.component(_sfc_main$4.name, _sfc_main$4);
};
_sfc_main$3.install = (app) => {
  app.component(_sfc_main$3.name, _sfc_main$3);
};
_sfc_main$2.install = (app) => {
  app.component(_sfc_main$2.name, _sfc_main$2);
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
LoadingOutlined.install = (app) => {
  app.component(LoadingOutlined.name, LoadingOutlined);
};
const components = [
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Divider,
  Switch,
  Select,
  Input,
  Row,
  _sfc_main$d,
  Layout,
  Dropdown,
  Menu,
  MenuItem,
  Radio,
  _sfc_main$7,
  Table,
  _sfc_main$5,
  _sfc_main$4,
  _sfc_main$3,
  _sfc_main$2,
  _sfc_main$1,
  LoadingOutlined
];
const install = (app) => {
  components.map((item) => {
    app.component(item.name, item);
  });
};
var index = __spreadValues({
  install
}, components);
export { index as default };
