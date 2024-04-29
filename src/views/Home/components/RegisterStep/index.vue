<template>
  <div class="step">
    <div class="container">
      <header>仅需4步，轻松搞定跨境收款</header>
      <div class="steps_item_con">
        <p class="henxian" />
        <ul>
          <div class="henxian2" />
          <li>
            <div class="xuhao f24 clw">1</div>
            <h5 class="f_slab f24 cl-42">注册账号</h5>
            <p>注册账号</p>
          </li>
          <li>
            <div class="xuhao f24 clw">2</div>
            <h5 class="f_slab f24 cl-42">完善资料</h5>
            <p>完善资料，享受极致服务</p>
          </li>
          <li>
            <div class="xuhao f24 clw">3</div>
            <h5 class="f_slab f24 cl-42">收单对接</h5>
            <p>接入简单，快速上线</p>
          </li>
          <li>
            <div class="xuhao f24 clw">4</div>
            <h5 class="f_slab f24 cl-42">提现收款</h5>
            <p>轻松收单，顺畅提现至您的银行</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step {
    color: #425466;
    padding-bottom: 82px;
    text-align: center;

    .container {
        width: 1300px;
        margin-left: auto;
        margin-right: auto;

        header {
            color: #0092d8;
            font-size: 40px;
            padding: 75px 0px;
            font-family: "RobotoSlab-Regular";
            text-transform: uppercase;
        }

        .steps_item_con .henxian {
            border-bottom: 1px solid #ccc;
            width: 72%;
            margin: 0 auto;
        }

        .steps_item_con {
            // border-bottom: 1px solid #ccc;
            // width: 72%;
            margin: 0 auto;
        }

        ul {
            display: flex;
            justify-content: space-evenly;
            transform: translateY(-20px);
            list-style: none;
            li {
                width: 25%;

                .xuhao {
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 40px;
                    background-color: #0092d8;
                    margin-left: auto;
                    margin-right: auto;
                }

                h5 {
                    margin-top: 32px;
                    margin-bottom: 16px;
                    font-size: 24px;
                    color: #425466;
                }
            }
        }
    }
}
</style>
