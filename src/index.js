import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);
  createIncompleteList(inputText);
};

// incomplate
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// create-incomplate
const createIncompleteList = (text) => {
  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncompleteList(complateButton.parentNode);
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      createIncompleteList(backButton.parentNode.firstChild.innerText);
      document
        .getElementById("complate-list")
        .removeChild(backButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(backButton);

    document.getElementById("complate-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divに追加
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // listに追加
  document.getElementById("incomplate-list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
