// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!

// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
	const DEFAULT_ICON_PROP = {
		src: "./images/user.png",
		width: "32",
		height: "32",
	};

	const INPUT_QUESTION_ELEMS = {
		question: document
			.querySelector("#inputSection")
			.querySelector("textarea"),
		username: document
			.querySelector("#inputSection")
			.querySelector("input"),
		sendBtn: document
			.querySelector("#inputSection")
			.querySelector("button"),
	};

	const CREATE_QUESTION = {
		parent: createWrapperElem,
		btn: createBtn,
		username: createUserElem,
		question: createQuestionElem,
		actions: createWrapperElem,
		icon: createIcon,
		inputField: createInputField,
		replies: createRepliesList,
	};

	const BTN_EVENT_HANDLERS = {
		sendQuestion: sendQuestionEventHandler,
		archive: archiveEventHandler,
		open: openEventHandler,
		reply: replyQuestionEventHandler,
		sendReply: sendReplyEventHandler,
	};

	const DEFAULT_USERNAME = "Anonymous";

	let openQuestions = document.querySelector("#openQuestions");
	let pendingQuestions = document.querySelector("#pendingQuestions");

	INPUT_QUESTION_ELEMS.sendBtn.addEventListener(
		"click",
		BTN_EVENT_HANDLERS.sendQuestion
	);

	function sendQuestionEventHandler() {
		let questionText = INPUT_QUESTION_ELEMS.question.value;
		console.log(questionText);
		let username = INPUT_QUESTION_ELEMS.username.value;

		if (questionText === "") {
			console.log("inside");
			return;
		}

		if (username.length === 0) {
			username = DEFAULT_USERNAME;
		}

		let parentElem = CREATE_QUESTION.parent("div", "pendingQuestion");

		let iconElem = CREATE_QUESTION.icon(
			DEFAULT_ICON_PROP.src,
			DEFAULT_ICON_PROP.height,
			DEFAULT_ICON_PROP.width
		);
		let usernameElem = CREATE_QUESTION.username("span", username);
		let questionElem = CREATE_QUESTION.question("p", questionText);
		let actionsElem = CREATE_QUESTION.actions("div", "actions");
		let archiveBtn = CREATE_QUESTION.btn("archive", "Archive");
		let openBtn = CREATE_QUESTION.btn("open", "Open");

		parentElem.appendChild(iconElem);
		parentElem.appendChild(usernameElem);
		parentElem.appendChild(questionElem);
		parentElem.appendChild(actionsElem);

		actionsElem.appendChild(archiveBtn);
		actionsElem.appendChild(openBtn);

		archiveBtn.addEventListener("click", BTN_EVENT_HANDLERS.archive);
		openBtn.addEventListener("click", BTN_EVENT_HANDLERS.open);

		pendingQuestions.appendChild(parentElem);
		console.log(pendingQuestions);
	}

	function createWrapperElem(tagName, className) {
		let parent = document.createElement(tagName);
		parent.setAttribute("class", className);

		return parent;
	}

	function archiveEventHandler(event) {
		let question = event.target.parentNode.parentNode;
		pendingQuestions.removeChild(question);
	}

	function openEventHandler(event) {
		let actionsWrapper = event.target.parentNode;
		let question = actionsWrapper.parentNode;
		question.setAttribute("class", "openQuestion");

		Array.from(actionsWrapper.childNodes).forEach((child) =>
			actionsWrapper.removeChild(child)
		);

		let replyBtn = CREATE_QUESTION.btn("reply", "Reply");
		replyBtn.addEventListener("click", BTN_EVENT_HANDLERS.reply);
		actionsWrapper.appendChild(replyBtn);

		let replySection = CREATE_QUESTION.parent("div", "replySection");
		let input = CREATE_QUESTION.inputField(
			"replyInput",
			"text",
			"Reply to this question here..."
		);
		let replies = CREATE_QUESTION.replies("reply", "1");
		let sendBtn = CREATE_QUESTION.btn("replyButton", "Send");
		sendBtn.addEventListener("click", BTN_EVENT_HANDLERS.sendReply);

		replySection.appendChild(input);
		replySection.appendChild(sendBtn);
		replySection.appendChild(replies);
		replySection.style.display = "none";

		question.appendChild(replySection);
		openQuestions.appendChild(question);
	}

	function replyQuestionEventHandler(event) {
		let replySection =
			event.target.parentNode.parentNode.querySelector(".replySection");
		let clickedBtn = event.target;

		if (clickedBtn.textContent === "Back") {
			clickedBtn.textContent = "Reply";
			replySection.style.display = "none";
			return;
		}

		clickedBtn.textContent = "Back";
		replySection.style.display = "block";
	}

	function sendReplyEventHandler(event) {
		let replySection =
			event.target.parentNode.parentNode.querySelector(".replySection");
		let input = replySection.querySelector(".replyInput");
		let replyText = input.value;

		if (replyText === "") {
			return;
		}

		let replies = replySection.querySelector(".reply");
		let reply = document.createElement("li");
		reply.textContent = replyText;
		replies.appendChild(reply);
		input.value = "";
	}

	function createInputField(className, type, placeholder) {
		let inputElem = document.createElement("input");
		inputElem.setAttribute("class", className);
		inputElem.setAttribute("type", type);
		inputElem.setAttribute("placeholder", placeholder);

		return inputElem;
	}

	function createBtn(className, textContent) {
		let btn = document.createElement("button");
		btn.setAttribute("class", className);
		btn.textContent = textContent;

		return btn;
	}

	function createRepliesList(className, type) {
		let list = document.createElement("ol");
		list.setAttribute("class", className);
		list.setAttribute("type", type);

		return list;
	}

	function createUserElem(tagName, username) {
		let element = document.createElement(tagName);
		element.textContent = username;

		return element;
	}

	function createQuestionElem(tagName, questionContent) {
		let element = document.createElement(tagName);
		element.textContent = questionContent;

		return element;
	}

	function createIcon(src, height, width) {
		let img = document.createElement("img");
		img.setAttribute("src", src);
		img.setAttribute("width", width);
		img.setAttribute("height", height);

		return img;
	}
}
