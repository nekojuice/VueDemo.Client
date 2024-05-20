<script setup>
let msg = 'hi'

// 插入HTML
let rawHtml = '<span style="color: red">This should be red.</span>'

// Attribute 綁定
let dynamicValue = 9527

// 同名簡寫
const id = 'topone'

// boolean attribute
let isButtonDisabled = true

// 一次綁定多個值
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

// 使用js表達式
let number = 9486
let ok = false
let message = 'cat pig dog'

// 呼叫函數
let date = new Date(2024, 5, 5)
function toTitleDate(x) {
  return x.toString()
}
function formatDate(x) {
  return x.toString()
}

// 指令Directives
let seen = true
</script>
<template>
  <div>
    <h1>模板語法</h1>
    <p>參考資料</p>
    <p>https://cn.vuejs.org/guide/essentials/template-syntax.html</p>
    <br />

    <h2>基礎</h2>
    <ol>
      <li>
        <h3>文字插值(text)</h3>
        <p># 雙大括號 { { key } } 取得變數為純text</p>
        <div>
          <p>貓咪說: {{ msg }}</p>
        </div>
        <br />
      </li>

      <li>
        <h3>插入HTML</h3>
        <p># 使用v-html 將字串輸出成html</p>
        <div><p v-html="rawHtml"></p></div>
        <br />
      </li>

      <li>
        <h3>Attribute 綁定</h3>
        <p># 雙大括號不能在HTML attributes 中使用，需要使用v-bind</p>
        <p># v-bind:id="dynamicId" 或者簡寫 :id="dynamicId"</p>
        <div>
          <input :value="dynamicValue" />
        </div>
        <br />
      </li>

      <li>
        <h3>同名簡寫 (v3.4+)</h3>
        <p># 如果attribute名稱與js變數名稱相同，則可以簡寫</p>
        <div>
          <div :id>指定了id</div>
        </div>
        <br />
      </li>

      <li>
        <h3>boolean attribute</h3>
        <p># 根據true / false 決定是否存在於該element</p>
        <div>
          <button :disabled="isButtonDisabled">Button disabled</button>
        </div>
        <br />
      </li>

      <li>
        <h3>一次綁定多個值</h3>
        <p># 一個物件全部綁上</p>
        <div>
          <div v-bind="objectOfAttrs">一次綁兩個!</div>
        </div>
        <br />
      </li>
    </ol>

    <h2>使用 js 表達式</h2>
    <ol>
      <li>
        <h3>使用js表達式</h3>
        <p># 僅可在雙大括弧內使用表達式做簡單運算</p>
        <p># 不可 return 或 = 賦值</p>
        <div>
          {{ number + 1 }}
          <br />
          {{ ok ? 'YES' : 'NO' }}
          <br />
          {{ message.split('').reverse().join('') }}
          <br />
          <div :id="`list-${id}`"></div>
        </div>
        <br />
      </li>

      <li>
        <h3>呼叫函數</h3>
        <div>
          <time :title="toTitleDate(date)" :datetime="date">
            {{ formatDate(date) }}
          </time>
        </div>
        <br />
      </li>

      <li>
        <h3>註冊全域表達式</h3>
        <div>app.config.globalProperties.msg = 'hello'</div>
      </li>
      <br />
    </ol>
    <br />

    <h2>指令Directives</h2>
    <ol>
      <li>
        <h3>帶 v- 開頭的特殊 attribute</h3>
        <p>
          # v-text v-html v-show v-if v-else v-else-if v-for v-on v-bind v-model v-slot v-pre v-once
          v-memo v-cloak
        </p>
        <div>
          <p v-if="seen">Now you see me</p>
        </div>
        <br />
      </li>

      <li>
        <h3>參數Arguments</h3>
        <p># 藉以更新一個 HTML attribute 的值</p>
      </li>
      <div>
        <a v-bind:href="url"> ... </a>
        <a :href="url"> 簡寫 </a>
        <br />
        <a v-on:click="doSomething"> ... </a>
        <a @click="doSomething"> 簡寫 </a>
      </div>
      <br />

      <li>
        <h3>動態參數</h3>
        <p># 值必須要是個字串或 null，特殊的 null 表示移除該綁定</p>
        <p># 不可有空格或引號</p>
        <div>
          <a v-on:[eventName]="doSomething"> ... </a> <a @[eventName]="doSomething"> 簡寫 </a>
        </div>
      </li>
      <br />
    </ol>

    <h2>修飾符Modifiers</h2>
    <p># 點開頭的特殊後綴</p>
    <div>
      <form @submit.prevent="onSubmit">...</form>
      <p># 呼叫event.preventDefault()</p>
    </div>
  </div>
</template>

<style scoped></style>
