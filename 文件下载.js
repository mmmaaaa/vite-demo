async function fileDownload (content, name = 'filename', suffix = 'docx') {
  try {
    // 添加字节序标识，避免乱码
    const data = await `\uFEFF${content}`
    const blob = new Blob([data], { type: 'docx,charset=UTF-8' })
    const downloadElement = document.createElement('a')
    // 创建下载链接
    const href = window.URL.createObjectURL(blob)
    downloadElement.href = href
    // 下载文件名
    downloadElement.download = `${name}.${suffix}`
    document.body.appendChild(downloadElement)
    downloadElement.click()
    // 下载成功提示 antdv的组件
    this.$notification.success({
      message: '下载成功'
    })
    // 移除元素
    document.body.removeChild(downloadElement)
    // 释放blob对象
    window.URL.revokeObjectURL(href)
  } catch (e) {
    // 下载失败提示 antdv的组件
    this.$notification.error({
      message: typeof e === 'string' ? e : JSON.stringify(e)
    })
  }
}