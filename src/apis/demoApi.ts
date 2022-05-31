// 导入axios实例
import httpRequest from '../requests/index'

// 定义接口的传参
interface getShenHuiFu {
	myType: string
}

// 获取神回复
export function getShenHuiFuInfo(param: getShenHuiFu) {
    return httpRequest({
		url: `/api/api-wenan-shenhuifu/index.php?aa1=${param.myType}`,
		method: 'get',
	})
}
