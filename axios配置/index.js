import Axios from './axios'

// 主赛场--查询用户游戏机会
export const mainGetUserTime = () => Axios('/game-service/v/selectusergameinfo')
// 主赛场--查询主赛场信息
export const mainGetInfo = () => Axios('/game-service/v/selectgameinfo')
// 主赛场--查询最新答题报告
export const mainGetReport = () => Axios('/game-service/v/searchnewsoundanswer')
// 主赛场--更新答题报告状态
export const mainReadReport = () => Axios('/game-service/v/updatenewsoundanswer')
// 主赛场--初始化答题信息
export const mainInitAnswer = () => Axios('/game-service/v/initusergameinfoforh5')
// 主赛场--使用复活卡
export const mainUseReliveCard = () => Axios('/game-service/v/addusergamechance')

// 分赛场--查询用户游戏机会
export const subGetUserTime = (id) => Axios(`/subcompete-game-service-${id}/v/user`)
// 分赛场--获取赛场列表
export const subGetArenaList = () => Axios('/subcompete-manage-service/v/subcompetes')
// 分赛场--查询最新答题报告
export const subGetReport = () => Axios('/subcompete-manage-service/v/getpkreport')
// 分赛场--更新答题报告状态
export const subReadReport = () => Axios('/subcompete-manage-service/v/updatepkreport')
// 分赛场--使用复活卡
export const subUseReliveCard = (id) => Axios(`/subcompete-game-service-${id}/v/use`)
// 分赛场--初始化答题
export const subInitAnswer = (id) => Axios(`/subcompete-game-service-${id}/v/prematch`)

// 排名--查询分赛场排名
export const subGetRank = (data) => Axios('/doubleegg-ranking/v/qryuserranking', data)
// 排名--查询分赛场排名--不需要用户信息
export const subGetRankNoUser = (data) => Axios('/doubleegg-ranking/v/qryuserrankingwithoutuid', data)
// 排名--查询用户分赛场获胜记录
export const subGetUserRank = (data) => Axios('/doubleegg-ranking/v/qryuserwinamount', data)

// user--获取用户信息
export const userGetInfo = () => Axios('/auth-service/v/getuserinfo?unMessage=1')
// user--微信授权登录{data:邀请码、渠道号}
export const userWechatAuth = (data) => Axios('/auth-service/v/wechatauth/login', data)
// user--天猫授权登录{data:邀请码、渠道号}
export const userTmAuth = (data) => Axios('/auth-service/v/tmallauth/login', data)
// user--设置邀请码
export const userAddInvitation = (data) => Axios('/auth-service/v/addinvitationcode?unMessage=1', data)
// user--获取wxjssdk配置
export const userWXSDKParam = (data) => Axios('/auth-service/v/getwechatjssdkparam', data)

// 道具--获取特权卡信息
export const userGetCard = (data) => Axios('/doubleegg-props/v/qrymyprops', data)
// 道具--使用免答卡
export const useAutoAnswerCard = (data) => Axios('doubleegg-props/v/useautoanswercard', data)
// 道具--使用复活卡
export const useReviveCard = (data) => Axios('doubleegg-props/v/userevivecard', data)
// 道具--查询本场次是否使用透视卡
export const getAutoAnswer = (data) => Axios('doubleegg-props/v/getautoanswerflag', data)

// 奖品--获取我的奖品列表
export const userGetPrize = () => Axios('/prize-service/v/qryprizerecord')
// 奖品--查询奖品收货地址
export const prizeGetAddress = (data) => Axios('/prize-service/v/qrymailingaddress', data)

// 主会场--答题--获取题目
export const searchquestion = (data) => Axios('/game-service/v/searchquestion', data)
// 主会场--答题--提交题目答案
export const addanswer = (data) => Axios('/game-service/v/addanswerforh5', data)

// 分会场--答题--开始匹配
export const keepmatching = (id) => Axios(`/subcompete-game-service-${id}/v/keepmatching`)
// 分会场--答题--用户点击选项答题
export const answer = (id, data) => Axios(`/subcompete-game-service-${id}/v/answer`, data)
// 分会场--答题--轮询获取答题结果
export const keepanswer = (id, data) => Axios(`/subcompete-game-service-${id}/v/keepanswer`, data)

// 获取订阅状态接口
export const getSubscribeStatus = (data) => Axios('/auth-service/v/getsubscribestatus', data)
// 领奖-实物奖品邮寄地址

export const addPrizeMailingAddress = (data) => Axios('prize-service/v/addprizemailingaddress?unMessage=1', data)

// // 领奖-发放福袋
export const shareLuckyBag = (data) => Axios('prize-service/v/shareLuckybag', data)

// // 领奖-获取福袋列表
export const qryLuckyBags = (data) => Axios('prize-service/v/qryluckybags', data)

// // 领奖-随机领取获取福袋
export const qryRandomBags = (data) => Axios('prize-service/v/qryrandombags', data)
// // 领奖-微信发放红包
export const sendRedPack = (data) => Axios('prize-service/v/sendredpack', data)



// WEBPACK FOOTER //
// ./src/api/index.js