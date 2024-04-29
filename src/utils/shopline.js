
export const isShopLine = () => {
  const redirectUri = 'https://beyounger.com/callback'

  // 创建 URLSearchParams 对象
  const params = new URLSearchParams(window.location.search)
  // 获取参数值
  const appkey = params.get('appkey') // "John"
  const handle = params.get('handle') // "30"
  const sign = params.get('sign') // "30"
  const timestamp = params.get('timestamp') // "30"
  // const scope = 'write_payment_gateways';
  const scope = 'write_payment_gateways,write_orders,read_orders,write_products,read_products'
  const code = params.get('code')

  console.log({
    appkey, handle, sign, timestamp, scope, redirectUri, code
  })
  if (appkey && handle && sign && timestamp) {
    const url = `https://${handle}.myshopline.com/admin/oauth-web/#/oauth/authorize?appKey=${appkey}&scope=${scope}&responseType=code&redirectUri=${redirectUri}`
    // 调用后台接口
    console.log(url)

    // 获取token后跳转
    window.location.href = url
  }
}

export const name = 'shopline'
