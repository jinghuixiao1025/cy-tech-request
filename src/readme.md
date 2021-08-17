## 项目依赖

-1.依赖 axios
-2.依赖 element-ui 的 MessageBox（也可以不用）

## 使用说明

```
import { request } from "@/request/index";

```

request 扩展了

1.  q:string 属性
2.  isFormData：boolen 是否进行 formdata 转换  
    其他参数都是 axios 的参数

## 使用例子

```
    request({
      method: "get",
      url: "/hahahahahaha",
      q: "这是问答",    // 带这个属性就会弹窗
    }).then((res: any) => {
      console.log(res);
    });
```

## 还可以不使用 base 拦截器，自写拦截器
