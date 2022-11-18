// Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis non velit architecto, nisi, assumenda officia illo repudiandae culpa quidem blanditiis. Repudiandae odio cumque nulla eveniet aliquid a natus obcaecati!
document.getElementById("addfield").onclick = function() {
    document.getElementById("pointadd").innerHTML += `
        <div class='trycheck'>
            <input type="checkbox" title='Done'>
            <label for='task'>
                <span contentEditable='true' class='tasktext'>Tap to write</span>
            </label>
            <button class='delcontent'>Delete</button>
        </div>
    `;
    let currentTask = document.querySelectorAll(".delcontent");
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function() {
            this.parentNode.remove();
        }
    }
}
document.onkeydown = (e) => {
    if (e.key === "Enter") {
        document.getElementById("addfield").click();
    }
}
document.getElementById("delall").onclick = () => {
    let tasks = document.querySelectorAll(".trycheck");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].remove();
    }
}