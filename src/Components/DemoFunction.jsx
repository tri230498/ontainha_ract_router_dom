//rfc - react function component
// Đây là hàm không phải lớp đối tượng
// return thẳng trong hàm không thông qua render()
import React from 'react'

export default function DemoFunction() {



    // Nội dung của hàm phải bao phủ bởi 1 thẻ
  return (
    <div>
        <div>Demo 1</div>
        <div>Demo 2</div>
        <div>Demo 3</div>
    </div>
  )
}
