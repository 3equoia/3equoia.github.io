const helloWorld = "If what I say is truly the story, I will have control over its ending."
const textElement = document.getElementById('text')

const wait = ms => new Promise(reslove => setTimeout(reslove, ms))

const writer = async (text, textElem) => {
    for (let index = 0; index < text.length; index++) {
        const letter = text[index]
        textElem.innerHTML += letter
        await wait(50)
    }
}
writer(helloWorld, textElement)

//show title one by one
	// 	var tit = document.title;var c = 0; function writetitle() {document.title = tit.substring(0,c);if(c==tit.length){c = 0;setTimeout("writetitle()", 750)}else {c++;setTimeout("writetitle()",275)}}writetitle()

	//   try{
	// 	var commentCnt = new Array();
	// 	  } catch(e){}
	//   newComment = function(post_id){
	// 	try{
	// 	  window.open('/post/comment/'+post_id,'comment','status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=480px,height=540px');
	// 	} catch(e){}
	//   }
	//   setCommentCnt = function(post_id){
	// 	try{
	// 	  if(commentCnt[post_id]){
	// 		document.write(commentCnt[post_id]);
	// 	  } else {
	// 		document.write(0);
	// 	  }
	// 	} catch(e){}
	//   }
