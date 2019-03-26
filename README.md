# Readme

### 步骤

* 全局安装 karma

```
npm install -g karma-cli
```

* 安装依赖

```
npm install
```

* 初始化测试

```
karma init
```
    1. Which testing framework do you want to use ? (mocha)
    2. Do you want to use Require.js ? (no)
    3. Do you want to capture any browsers automatically ? (Chrome)
    4. What is the location of your source and test files ? (https://cdn.bootcss.com/jquery/2.2.4/jquery.js, node_modules/should/should.js, test/**.js)
    5. Should any of the files included by the previous patterns be excluded ? ()
    6. Do you want Karma to watch all the files and run the tests on change ? (yes)

* 启动测试

```
karma start
```

* 尝试接入Travis CI

### 参考

* [karma](http://karma-runner.github.io/)
* [Travis-CI](https://travis-ci.org/)