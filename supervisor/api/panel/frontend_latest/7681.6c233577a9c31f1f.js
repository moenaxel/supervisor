export const ids=["7681"];export const modules={83377:function(e,t,i){i.d(t,{q:()=>g});i("39527"),i("99790"),i("13334");var o=i("79419");i("92745");let a=function(e){return e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e}({});const r=128;function n(){const e=[],t=[];for(let e=0;e<=r;e++)t[e]=0;for(let i=0;i<=r;i++)e.push(t.slice(0));return e}function l(e,t){if(t<0||t>=e.length)return!1;const i=e.codePointAt(t);switch(i){case a.Underline:case a.Dash:case a.Period:case a.Space:case a.Slash:case a.Backslash:case a.SingleQuote:case a.DoubleQuote:case a.Colon:case a.DollarSign:case a.LessThan:case a.OpenParen:case a.OpenSquareBracket:return!0;case void 0:return!1;default:return(o=i)>=127462&&o<=127487||8986===o||8987===o||9200===o||9203===o||o>=9728&&o<=10175||11088===o||11093===o||o>=127744&&o<=128591||o>=128640&&o<=128764||o>=128992&&o<=129003||o>=129280&&o<=129535||o>=129648&&o<=129750?!0:!1}var o}function s(e,t){if(t<0||t>=e.length)return!1;switch(e.charCodeAt(t)){case a.Space:case a.Tab:return!0;default:return!1}}function d(e,t,i){return t[e]!==i[e]}var c=function(e){return e[e.Diag=1]="Diag",e[e.Left=2]="Left",e[e.LeftLeft=3]="LeftLeft",e}(c||{});function u(e,t,i,o,a,n,l){const s=e.length>r?r:e.length,u=o.length>r?r:o.length;if(i>=s||n>=u||s-i>u-n)return;if(!function(e,t,i,o,a,r,n=!1){for(;t<i&&a<r;)e[t]===o[a]&&(n&&(v[t]=a),t+=1),a+=1;return t===i}(t,i,s,a,n,u,!0))return;let k;!function(e,t,i,o,a,r){let n=e-1,l=t-1;for(;n>=i&&l>=o;)a[n]===r[l]&&(b[n]=l,n--),l--}(s,u,i,n,t,a);let g,y,C=1;const _=[!1];for(k=1,g=i;g<s;k++,g++){const r=v[g],l=b[g],d=g+1<s?b[g+1]:u;for(C=r-n+1,y=r;y<d;C++,y++){let s=Number.MIN_SAFE_INTEGER,d=!1;y<=l&&(s=h(e,t,g,i,o,a,y,u,n,0===f[k-1][C-1],_));let v=0;s!==Number.MAX_SAFE_INTEGER&&(d=!0,v=s+p[k-1][C-1]);const b=y>r,O=b?p[k][C-1]+(f[k][C-1]>0?-5:0):0,M=y>r+1&&f[k][C-1]>0,x=M?p[k][C-2]+(f[k][C-2]>0?-5:0):0;if(M&&(!b||x>=O)&&(!d||x>=v))p[k][C]=x,m[k][C]=c.LeftLeft,f[k][C]=0;else if(b&&(!d||O>=v))p[k][C]=O,m[k][C]=c.Left,f[k][C]=0;else{if(!d)throw new Error("not possible");p[k][C]=v,m[k][C]=c.Diag,f[k][C]=f[k-1][C-1]+1}}}if(!_[0]&&!l)return;k--,C--;const O=[p[k][C],n];let M=0,x=0;for(;k>=1;){let e=C;do{const t=m[k][e];if(t===c.LeftLeft)e-=2;else{if(t!==c.Left)break;e-=1}}while(e>=1);M>1&&t[i+k-1]===a[n+C-1]&&!d(e+n-1,o,a)&&M+1>f[k][e]&&(e=C),e===C?M++:M=1,x||(x=e),k--,C=e-1,O.push(C)}u===s&&(O[0]+=2);const L=x-s;return O[0]-=L,O}function h(e,t,i,o,a,r,n,c,u,h,v){if(t[i]!==r[n])return Number.MIN_SAFE_INTEGER;let b=1,f=!1;return n===i-o?b=e[i]===a[n]?7:5:!d(n,a,r)||0!==n&&d(n-1,a,r)?!l(r,n)||0!==n&&l(r,n-1)?(l(r,n-1)||s(r,n-1))&&(b=5,f=!0):b=5:(b=e[i]===a[n]?7:5,f=!0),b>1&&i===o&&(v[0]=!0),f||(f=d(n,a,r)||l(r,n-1)||s(r,n-1)),i===o?n>u&&(b-=f?3:5):b+=h?f?2:0:f?0:1,n+1===c&&(b-=f?3:5),b}const v=k(256),b=k(256),f=n(),p=n(),m=n();function k(e){const t=[];for(let i=0;i<=e;i++)t[i]=0;return t}const g=(e,t)=>t.map((t=>(t.score=((e,t)=>{let i=Number.NEGATIVE_INFINITY;for(const a of t.strings){const t=u(e,(0,o._)(e.toLowerCase()),0,a,(0,o._)(a.toLowerCase()),0,!0);if(!t)continue;const r=0===t[0]?1:t[0];r>i&&(i=r)}if(i!==Number.NEGATIVE_INFINITY)return i})(e,t),t))).filter((e=>void 0!==e.score)).sort((({score:e=0},{score:t=0})=>e>t?-1:e<t?1:0))},79419:function(e,t,i){i.d(t,{_:function(){return o}});const o=e=>e.normalize("NFD").replace(/[\u0300-\u036F]/g,"")},94279:function(e,t,i){var o=i(44249),a=i(72621),r=(i(39527),i(41360),i(2394)),n=(i(78545),i(43631)),l=i(57243),s=i(50778),d=i(20552),c=i(36522);i(23043),i(7285),i(83166);(0,n.hC)("vaadin-combo-box-item",l.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,o.Z)([(0,s.Mo)("ha-combo-box")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"renderer",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"opened",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,s.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){await this.updateComplete,this._comboBox?.open()}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this._inputElement?.updateComplete),this._inputElement?.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){return l.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,r.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,d.o)(this.label)}" placeholder="${(0,d.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,d.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${l.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" .helper="${this.helper}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?l.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,d.o)(this.hass?.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,d.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>l.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,c.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){this.opened?(this._comboBox?.close(),e.stopPropagation()):this._comboBox?.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const t=e.detail.value;if(setTimeout((()=>{this.opened=t}),0),(0,c.B)(this,"opened-changed",{value:e.detail.value}),t){const e=document.querySelector("vaadin-combo-box-overlay");e&&this._removeInert(e),this._observeBody()}else this._bodyMutationObserver?.disconnect(),this._bodyMutationObserver=void 0}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(this._overlayMutationObserver?.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){if(e.inert)return e.inert=!1,this._overlayMutationObserver?.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const t=e.target;t.inert&&(this._overlayMutationObserver?.disconnect(),this._overlayMutationObserver=void 0,t.inert=!1)}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,c.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);const t=e.detail.value;t!==this.value&&(0,c.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),l.oi)}};
//# sourceMappingURL=7681.6c233577a9c31f1f.js.map