### cache-control
- 可缓存性
  + public
  + private
  + no-cache

- 到期
  + max-age = <seconds>
  + s-maxage = <seconds> 代理服务器设置的
  + max-stale = <seconds>  没有超过这个值 会使用过期的缓存  

- 重新验证
  + must-revalidate  必须验证
  + proxy-revalidate  代理

- no-store  
- no-transform
  