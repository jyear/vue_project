<style lang="less">
@import './index.less';
</style>
<template>
    <div class="demo-page">
        <div class="demo-page__left">
            <div class="left-top">
                <codemirror v-model="code" :options="cmOption"></codemirror>
            </div>
            <div class="left-bottom">
                <button @click="getCode">获取内容</button>
            </div>
        </div>
        <div class="right" id="xterm"></div>
    </div>
</template>
<script lang='ts'>
interface Data {
    code: string;
    cmOption: any;
}
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/python/python.js';
import 'codemirror/addon/selection/active-line.js';

// closebrackets
import 'codemirror/addon/edit/closebrackets.js';
// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
// import 'codemirror/addon/search/searchcursor.js'
// import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/emacs.js';

//
import { Terminal, IEvent } from 'xterm';
import 'xterm/css/xterm.css';

export default {
    components: {
        codemirror
    },
    data(): Data {
        return {
            //             code: `
            // # emacs键位的编辑器
            // # Literals
            // 1234
            // 0.0e101
            // .123
            // 0b01010011100
            // 0o01234567
            // 0x0987654321abcdef
            // 7
            // 2147483647
            // 3L
            // 79228162514264337593543950336L
            // 0x100000000L
            // 79228162514264337593543950336
            // 0xdeadbeef
            // 3.14j
            // 10.j
            // 10j
            // .001j
            // 1e100j
            // 3.14e-10j
            // # String Literals
            // 'For''
            // "God""
            // """so loved
            // the world"""
            // '''that he gave
            // his only begotten' '''
            // 'that whosoever believeth in him'
            // ''
            // # Identifiers
            // __a__
            // a.b
            // a.b.c
            // #Unicode identifiers on Python3
            // # a = xddot
            // a⃗ = ẍ
            // # a = vdot
            // a⃗ = v̇
            // #Fec = m cdot aec
            // F⃗ = m•a⃗
            // # Operators
            // + - * / % & | ^ ~ < >
            // == != <= >= <> << >> // **
            // and or not in is
            // #infix matrix multiplication operator (PEP 465)
            // A @ B
            // # Keywords
            // as assert break class continue def del elif else except
            // finally for from global if import lambda pass raise
            // return try while with yield
            // # Python 2 Keywords (otherwise Identifiers)
            // exec print
            // # Python 3 Keywords (otherwise Identifiers)
            // nonlocal
            // # Types
            // bool classmethod complex dict enumerate float frozenset int list object
            // property reversed set slice staticmethod str super tuple type
            // # Python 2 Types (otherwise Identifiers)
            // basestring buffer file long unicode xrange
            // # Python 3 Types (otherwise Identifiers)
            // bytearray bytes filter map memoryview open range zip
            // # Some Example code
            // import os
            // from package import ParentClass
            // @nonsenseDecorator
            // def doesNothing():
            //     pass
            // class ExampleClass(ParentClass):
            //     @staticmethod
            //     def example(inputStr):
            //         a = list(inputStr)
            //         a.reverse()
            //         return ''.join(a)
            //     def __init__(self, mixin = 'Hello'):
            //         self.mixin = mixin
            // `,
            code: `
#!/usr/bin/python3
 
#类定义
class people:
    #定义基本属性
    name = ''
    age = 0
    #定义私有属性,私有属性在类外部无法直接进行访问
    __weight = 0
    #定义构造方法
    def __init__(self,n,a,w):
        self.name = n
        self.age = a
        self.__weight = w
    def speak(self):
        print("%s 说: 我 %d 岁。" %(self.name,self.age))
 
# 实例化类
p = people('runoob',10,30)
p.speak()
            `,
            cmOption: {
                autoCloseBrackets: true,
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                line: true,
                mode: 'text/x-python',
                theme: 'base16-dark',
                keyMap: 'emacs'
            }
        };
    },
    methods: {
        getCode() {
            //this.ws.emit('leftmessage', 'python\r\n');
            this.ws.emit('leftmessage', this.code + '\r\n');
            //this.ws.emit('leftmessage', 'exit()\r\n');
        },
        async getPid() {
            let res = await fetch('http://192.168.1.167:8085/term', {
                method: 'POST'
            }).then(res => {
                return res.text();
            });
            return res;
        }
    },
    async mounted() {
        let res = JSON.parse(await this.getPid());
        this.ws = window.io(
            `ws://192.168.1.167:8085/termsocket?pid=${res.data}`
        );
        this.terminal = new Terminal({
            rendererType: 'canvas',
            disableStdin: false
        });
        this.terminal.open(document.querySelector('#xterm'));
        this.terminal.write(`潭州教育 \r\n${new Date()}\r\n\r\n$`);
        this.terminal.onData((e: any): any => {
            this.ws.emit('message', e);
        });
        this.ws.on('message', (data: any) => {
            this.terminal.write(data.replace('message', ''));
        });
    }
};
</script>
