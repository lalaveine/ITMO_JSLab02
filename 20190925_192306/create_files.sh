#!/bin/bash
cat << EOF > 1.js 
#!/usr/bin/node
console.log('Hello, world!');
EOF

cat << EOF > 2.js 
#!/usr/bin/node
console.log('Hello, %s!', 'world');
EOF


chmod 744 1.js 2.js
