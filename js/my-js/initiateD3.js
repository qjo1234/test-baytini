//***********************************************************************/

const getJsonThenCreateTree = (treeElement) => {
  $.getScript("js/my-js/data.js", function (jsFile) {
    var treePlugin = new d3.mitchTree.boxedTree()
      .setIsFlatData(true)
      .setData(JSON_DATA)
      .setElement(treeElement)
      .setIdAccessor(function (data) {
        return data.id;
      })
      .setParentIdAccessor(function (data) {
        return data.parent_id;
      })
      .setBodyDisplayTextAccessor(function (data) {
        return isEn() ? data.name_en : data.name_ar;
      })
      // .setTitleDisplayTextAccessor(function (data) {
      //   return "Name_AR";
      // })
      .initialize();
  });
};

//***********************************************************************/

const fixTree = () => {
  fixAllText();
  fixAllSubTxtPos();

  document.getElementById("tree").addEventListener("click", (e) => {
    fixAllText();
    fixAllSubTxtPos();
  });
};

//***********************************************************************/

const MAX_CHAR_IN_LINE = 12;

const fixText = (txtNode) => {
  let txt = txtNode.innerHTML;
  const size = txt.length;

  if (size <= MAX_CHAR_IN_LINE) return;
  if (txtNode.querySelectorAll("tspan").length > 0) return;

  const words = txt.split(" ");

  const set = new Set();
  let str = "";

  for (const word of words) {
    const comSize = str.length;
    if (comSize > 0 && comSize + word.length + 1 <= MAX_CHAR_IN_LINE) {
      str += ` ${word}`;
    } else if (comSize === 0 && word.length <= MAX_CHAR_IN_LINE) {
      str = word;
    } else {
      set.add(str);
      str = word;
    }
  }

  set.add(str);

  let setArr = [...set];
  let res = "";
  let dy = setArr.length > 2 ? -26 : -12;
  let expand = setArr.length > 2 ? [25, 55] : [18, 40];

  for (let i = 0; i < setArr.length; i++) {
    const word = isEn() ? setArr[i] : fixArabicStr(setArr[i]);
    const expandNum = i > 1 ? expand[0] : expand[1];

    res += `<tspan  dy="${dy + i * expandNum}px" >${word}</tspan>`;
  }

  txtNode.style.direction = "ltr";
  txtNode.innerHTML = res;
};

/**
 * @param {String} str
 */
const fixArabicStr = (str) => {
  str = str.split("").reverse().join("");

  str = str.replace("(", ")");
  str = str.replace(")", "(");

  str = str.replace("[", "]");
  str = str.replace("]", "[");

  str = str.replace("{", "}");
  str = str.replace("}", "{");

  return str;
};

/**
 *
 * @param {HTMLElement} parentTxt
 * @param {HTMLElement} subTxt
 * @param {number} symblo 1 or -1
 */
const fixSubTxtXPos = (parentTxt, subTxt, symblo) => {
  subTxt.setAttribute("x", `${90 - subTxt.clientWidth / 2}px`);
};

const fixAllText = () => {
  const textAr = document.querySelectorAll(".d3plus-textBox text");
  for (const txt of textAr) {
    fixText(txt);
  }
};

const fixAllSubTxtPos = () => {
  const textAr = document.querySelectorAll(".d3plus-textBox text");
  for (const txt of textAr) {
    const subTxtArr = txt.querySelectorAll("tspan");

    for (let i = 0; i < subTxtArr.length; i++) {
      const subTxt = subTxtArr[i];
      fixSubTxtXPos(txt, subTxt, i === 0 ? 1 : -1);
    }
  }
};

//***********************************************************************/

const initiateTree = () => {
  const treeElement = document.getElementById("tree");

  if (treeElement) {
    if (isAr()) treeElement.classList.add("fix-ar");

    getJsonThenCreateTree(treeElement);
    fixTree();
  }
};

initiateTree();

//***********************************************************************/
