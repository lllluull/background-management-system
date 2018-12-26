import React, { Component } from 'react'
import {Card, Table, Modal} from 'antd'
import {get} from '../../utils/request'


class MyTable extends Component {
   async componentDidMount() {
        const res = await get('table/list')
        let dataSouce = res.data.result.map((v,index) => {
          v.key = index
          return v
        })
        this.setState({
          dataSouce
        })
        
    }
    state = {
        dataSouce: []
    }
    rowClick = (rec, index) => {
      let selectIndex =[index] 
      console.log(rec)
      Modal.info({
        title: '提示',
        content: `${rec.userName}在${rec.address}`
      })
      this.setState({
        selectIndex,
        selectItem: rec
      })
    }
    render() {
      const {selectIndex} = this.state
      const rowSelection ={
        type:'radio',
        selectedRowKeys: selectIndex
      }
        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          }, {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',
          }, {
            title: '性别',
            dataIndex: 'gendar',
            key: 'gendar',
            render(gendar) {
              return gendar === 1? '男':'女'
            }
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            render(state) {
              let config = {
                '1':'北大才子',
                '2':'清华浪子',
                '3':'绝世美女',
                '4':'利兰这',
                '5': '胡鹏鹏',
              }
              return config[state]
            }
          }, {
            title: '兴趣',
            dataIndex: 'interst',
            key: 'interst',
          }, {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
          }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address', 
          }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',  
          }];
        return(
            <div>
                <Card title='动态表格'>
                    <Table
                        columns = {columns}
                        dataSource ={this.state.dataSouce}
                        pagination = {false}
                        rowSelection = {rowSelection}
                        onRow = {
                          (record, index) => {
                            return {
                              onClick: () => {
                                this.rowClick(record, index)
                              }
                
                            }
                          }
                        }

                    >
                      </Table>  
                </Card>
            </div>
        )
        
    }

}


export default MyTable