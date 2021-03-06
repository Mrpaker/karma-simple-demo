describe('jQuery', function () {
  it('should have jQuery', function () {
    if (!window.jQuery) {
      throw new Error('karma.conf.js 配置项中 files 缺少jQuery源')
    }
  })

  it('sohould able to get a bdy', function () {
    var $body = $('body')
    $body.length.should.equal(1)
    $body[0].should.equal(document.getElementsByTagName('body')[0])
  })

  describe('should able to trigger an event', function () {
    var ele
    before(function () {
      ele = document.createElement('button')
      document.body.appendChild(ele)
    })

    it('should able trigger an event', function (done) {
      $(ele).on('click', function () {
        done()
      }).trigger('click')
    })

    after(function () {
      document.body.removeChild(ele)
      ele = null
    })
  })

  it('should able to request https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js', function (done) {
    $.get('https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js', function(data){
      if(data) {
        done()
      }
    })
  })
})