const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Hard-coded valid credentials
const validUserId = 'admin';
const validPassword = 'password123';

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    // Serve HTML form for GET requests to root
    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>Login Form</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 50px; }
                        .container { max-width: 300px; margin: 0 auto; }
                        form { display: flex; flex-direction: column; gap: 10px; }
                        input { padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
                        button { padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
                        button:hover { background: #0056b3; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Login</h2>
                        <form action="/login" method="POST">
                            <input type="text" name="userId" placeholder="User ID" required>
                            <input type="password" name="password" placeholder="Password" required>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </body>
            </html>
        `);
    }
    // Handle form submission
    else if (req.method === 'POST' && parsedUrl.pathname === '/login') {
        let body = '';
        
        // Collect request data
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        // Process data when complete
        req.on('end', () => {
            const postData = querystring.parse(body);
            const { userId, password } = postData;

            if (userId === validUserId && password === validPassword) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h2>Login successful!</h2>');
            } else {
                res.writeHead(401, { 'Content-Type': 'text/html' });
                res.end('<h2>Invalid credentials</h2>');
            }
        });
    }
    // Handle other routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});