/*!
 * *************************************
 * 个人封装兼容性方法及常用方法
 * Created by Freed on 2017/1/22.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 * *************************************
 */

/**
 * 获取第一个子元素兼容处理
 * @param ele
 * @return {*}
 */
function getFirstElement (ele){
	if (ele.firstElementChild){
		return ele.firstElementChild;
	} else {
		var node = ele.firstChild;
		while (node && node.nodeType !==1){
			node = node.nextSibling;
		}
		return node;
	}
}

/**
 * 获取最后一个子元素兼容处理
 * @param ele
 * @return {*}
 */
function getLastElement (ele){
	if (ele.lastElementChild){
		return ele.lastElementChild;
	} else {
		var node = ele.lastChild;
		while (node && node.nodeType !==1){
			node = node.previousSibling;
		}
		return node;
	}
}