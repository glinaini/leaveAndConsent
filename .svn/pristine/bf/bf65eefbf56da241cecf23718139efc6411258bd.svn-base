export function MessageSuccess (content) {
  let box =
    `<div class="messagegreenbox" style="text-align: center;
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .5s,transform .5s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      color: #67c23a;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      display:block">
      ${content}
    </div>`
  function append (parent, text) {
    if (typeof text === 'string') {
      var temp = document.createElement('div')
      temp.innerHTML = text
      // 防止元素太多 进行提速
      var frag = document.createDocumentFragment()
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild)
      }
      parent.appendChild(frag)
    } else {
      parent.appendChild(text)
    }
  }
  append(document.body, box)
  setTimeout(() => {
    var arr = document.getElementsByClassName('messagegreenbox')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != null) {
        arr[i].parentNode.removeChild(arr[i])
      }
    }
  }, 2000)
}
export function MessageError (content) {
  let box =
    `<div class="messageredbox" style="text-align: center;
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .5s,transform .5s;
      overflow: hidden;
      padding: 15px 15px 15px 20px;
      color: red;
      background-color: #ccc;
      border-color:grey;
      display:block">
      ${content}
    </div>`
  function append (parent, text) {
    if (typeof text === 'string') {
      var temp = document.createElement('div')
      temp.innerHTML = text
      // 防止元素太多 进行提速
      var frag = document.createDocumentFragment()
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild)
      }
      parent.appendChild(frag)
    } else {
      parent.appendChild(text)
    }
  }
  append(document.body, box)
  setTimeout(() => {
    var arr = document.getElementsByClassName('messageredbox')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != null) {
        arr[i].parentNode.removeChild(arr[i])
      }
    }
  }, 2000)
}
