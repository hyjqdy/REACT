// get fs module
var fs = require('fs');
//get http module
var http = require('http');
//get cluster module
var cluster = require('cluster');

var cpus = require('os').cpus().length;

if (cluster.isMaster) {
	for(let i = 0; i < cpus - 1; i++) {
		cluster.fork();
	}
	cluster.on("listening", function(worker) {
		console.log("started worker " + worker.process.pid);
	});
	cluster.on("exit", function(worker) {
		console.log("worker killed" + worker.process.pid);
		cluster.fork();
	});

} else {
    var server = http.createServer(function(req, res) {
        var stream = fs.createReadStream("cluster_server.js");
        stream.on("data", function(chunk) {
           res.write(chunk.toString());
        });
        stream.on("end", function(chunk) {
            res.end();
        });
    });
    server.listen(3000);
}
