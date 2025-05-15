const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = req.url;
    
    // Set content type to HTML for all responses
    res.setHeader('Content-Type', 'text/html');
    
    if (path === '/' || path === '/home') {
        // Home page
        res.writeHead(200);
        res.end("<h1>Welcome to John Doe's Home page.</h1>");
    } 
    else if (path === '/about') {
        // About page
        res.writeHead(200);
        res.end(`
            <h1>About Me</h1>
            <ul>
                <li><strong>Name:</strong> John Doe</li>
                <li><strong>Date of Birth:</strong> January 1, 1990</li>
                <li><strong>Email:</strong> john.doe@example.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Main St, Anytown, USA</li>
            </ul>
        `);
    } 
    else if (path === '/time') {
        // Current time page
        const currentTime = new Date().toString();
        res.writeHead(200);
        res.end(`
            <h1>Current Server Time</h1>
            <p>${currentTime}</p>
        `);
    } 
    else {
        // 404 Not Found
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1><p>The page you requested could not be found.</p>');
    }
});

const PORT = 4545;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});