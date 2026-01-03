// ===============================
// QUIZ DATA
// ===============================
const quizData = [
  {
    question: "What does LAN stand for?",
    options: [
      "Large Area Network",
      "Local Area Network",
      "Long Area Network",
      "Logical Area Network"
    ],
    answer: 1
  },
  {
    question: "Which device connects multiple computers in a LAN?",
    options: [
      "Router",
      "Modem",
      "Switch",
      "Firewall"
    ],
    answer: 2
  },
  {
    question: "Which protocol assigns IP addresses automatically?",
    options: [
      "DNS",
      "HTTP",
      "DHCP",
      "FTP"
    ],
    answer: 2
  },
  {
    question: "Which device mainly uses MAC addresses to forward data?",
    options: ["Router", "Switch", "Firewall", "Modem"],
    answer: 1
  },
  {
    question: "Which OSI layer converts data into bits for transmission?",
    options: ["Data Link", "Network", "Physical", "Transport"],
    answer: 2
  },
  {
    question: "Which protocol is used to assign IP addresses automatically?",
    options: ["DNS", "HTTP", "FTP", "DHCP"],
    answer: 3
  },
  {
    question: "A packet is best described as:",
    options: [
      "A physical cable",
      "A formatted unit of data",
      "A network device",
      "A MAC address"
    ],
    answer: 1
  },
  {
    question: "Which OSI layer is responsible for error detection and correction?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 1
  },
  {
    question: "In the TCP/IP model, which layer combines OSI’s Session and Presentation layers?",
    options: ["Application", "Transport", "Internet", "Network Access"],
    answer: 0
  },
  {
    question: "Which protocol is used to securely transfer files over SSH?",
    options: ["FTP", "TFTP", "SFTP", "HTTP"],
    answer: 2
  },
  {
    question: "Which layer of the OSI model is responsible for logical addressing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 2
  },
  {
    question: "What does DNS primarily do?",
    options: [
      "Encrypt data",
      "Assign IP addresses",
      "Translate domain names to IP addresses",
      "Transfer files"
    ],
    answer: 2
  },
  {
    question: "Which device operates mainly at the Network layer?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: 2
  },
  {
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "ICMP", "TCP", "ARP"],
    answer: 2
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["21", "25", "80", "443"],
    answer: 2
  },
  {
    question: "Which topology connects all devices to a central device?",
    options: ["Ring", "Mesh", "Star", "Bus"],
    answer: 2
  },
  {
    question: "Which address is burned into the network interface card (NIC)?",
    options: ["IP address", "Subnet mask", "MAC address", "Gateway address"],
    answer: 2
  },
  {
    question: "Which command is used to test network connectivity?",
    options: ["ipconfig", "tracert", "ping", "netstat"],
    answer: 2
  },
  {
    question: "Which addressing type is used at the Network layer?",
    options: ["MAC address", "Port number", "IP address", "URL"],
    answer: 2
  },
  {
    question: "Which device mainly uses MAC addresses to forward data?",
    options: ["Router", "Switch", "Firewall", "Modem"],
    answer: 1
  },
  {
    question: "Bandwidth refers to:",
    options: ["Actual data transferred", "Maximum data capacity", "Network delay", "Packet loss"],
    answer: 1
  },
  {
    question: "What is the primary function of the Transport layer?",
    options: ["Routing packets", "Encryption", "End-to-end communication", "Framing"],
    answer: 2
  },
  {
    question: "Which OSI layer converts data into bits for transmission?",
    options: ["Data Link", "Network", "Physical", "Transport"],
    answer: 2
  },
  {
    question: "Throughput is best defined as:",
    options: ["Maximum possible speed", "Actual data transferred", "Signal strength", "Latency"],
    answer: 1
  },
  {
    question: "A packet is best described as:",
    options: ["A physical cable", "A formatted unit of data", "A network device", "A MAC address"],
    answer: 1
  },
  {
    question: "Which factor most directly affects latency?",
    options: ["Cable length", "Bandwidth size", "File size", "IP address"],
    answer: 0
  },
  {
    question: "Which layer of the OSI model is responsible for logical addressing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 2
  },
  {
    question: "In the TCP/IP model, which layer combines OSI’s Session and Presentation layers?",
    options: ["Application", "Transport", "Internet", "Network Access"],
    answer: 0
  },
  {
    question: "Which protocol is used to assign IP addresses automatically?",
    options: ["DNS", "HTTP", "FTP", "DHCP"],
    answer: 3
  },
  {
    question: "Which OSI layer is responsible for error detection and correction?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 1
  },
  {
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "ICMP", "TCP", "ARP"],
    answer: 2
  },
  {
    question: "Which topology connects all devices to a central device?",
    options: ["Ring", "Mesh", "Star", "Bus"],
    answer: 2
  },
  {
    question: "Which command is used to test network connectivity?",
    options: ["ipconfig", "tracert", "ping", "netstat"],
    answer: 2
  },
  {
    question: "Iperf is mainly used to:",
    options: ["Test passwords", "Measure throughput", "Assign IPs", "Capture packets"],
    answer: 1
  },
  {
    question: "Which topology provides the highest redundancy?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    answer: 3
  },
  {
    question: "A network limited to a small geographic area is called:",
    options: ["WAN", "MAN", "LAN", "PAN"],
    answer: 2
  },
  {
    question: "High bandwidth but low throughput indicates:",
    options: ["Excellent performance", "Congestion", "No connection", "High latency only"],
    answer: 1
  },
  {
    question: "Which topology uses a central connecting device?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2
  },
  {
    question: "Which tool is commonly used for real-world internet speed testing?",
    options: ["Ping", "Traceroute", "Speedtest", "Wireshark"],
    answer: 2
  },
  {
    question: "Failure of the backbone affects which topology most?",
    options: ["Star", "Bus", "Mesh", "Hybrid"],
    answer: 1
  },
  {
    question: "Bluetooth networks are classified as:",
    options: ["WLAN", "CAN", "PAN", "MAN"],
    answer: 2
  },
  {
    question: "Which addressing type is used at the Network layer?",
    options: ["MAC address", "Port number", "IP address", "URL"],
    answer: 2
  },
  {
    question: "Wireless LAN is also known as:",
    options: ["WAN", "MAN", "WLAN", "PAN"],
    answer: 2
  },
  {
    question: "A university campus network is a:",
    options: ["LAN", "WAN", "MAN", "CAN"],
    answer: 3
  },
  {
    question: "Bandwidth refers to:",
    options: ["Actual data transferred", "Maximum data capacity", "Network delay", "Packet loss"],
    answer: 1
  },
  {
    question: "Which device mainly uses MAC addresses to forward data?",
    options: ["Router", "Switch", "Firewall", "Modem"],
    answer: 1
  },
  {
    question: "Throughput is best defined as:",
    options: ["Maximum possible speed", "Actual data transferred", "Signal strength", "Latency"],
    answer: 1
  },
  {
    question: "Which topology is most affected if a single cable fails?",
    options: ["Mesh", "Star", "Ring", "Bus"],
    answer: 3
  },
  {
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "ICMP", "TCP", "DNS"],
    answer: 2
  },
  {
    question: "Google Docs is an example of:",
    options: ["IaaS", "PaaS", "SaaS", "On-premises"],
    answer: 2
  },
  {
    question: "Protocol that assigns IP addresses automatically:",
    options: ["DNS", "DHCP", "ICMP", "NTP"],
    answer: 1
  },
  {
    question: "Hybrid cloud means:",
    options: ["Public only", "Private only", "Mixed cloud & local", "Community"],
    answer: 2
  },
  {
    question: "Best protocol for live video streaming:",
    options: ["TCP", "UDP", "FTP", "HTTPS"],
    answer: 1
  },
  {
    question: "On-premises infrastructure means:",
    options: ["Cloud hosted", "Local hosted", "No hardware", "Public access"],
    answer: 1
  },
  {
    question: "Secure file transfer protocol is:",
    options: ["FTP", "TFTP", "SFTP", "HTTP"],
    answer: 2
  },
  {
    question: "Key advantage of cloud services is:",
    options: ["Local servers", "High cost", "Scalability", "Limited access"],
    answer: 2
  },
  {
    question: "Remote work mainly relies on:",
    options: ["LAN only", "Cloud & VPN", "PAN", "Physical servers"],
    answer: 1
  },
  {
    question: "AWS EC2 is an example of:",
    options: ["SaaS", "PaaS", "IaaS", "Hybrid"],
    answer: 2
  },
  {
    question: "Which protocol is best suited for fast, real-time communication?",
    options: ["TCP", "UDP", "FTP", "SMTP"],
    answer: 1
  },
  {
    question: "DNS is mainly used to:",
    options: [
      "Assign IP addresses",
      "Encrypt traffic",
      "Translate domain names to IP addresses",
      "Test connectivity"
    ],
    answer: 2
  },
  {
    question: "Cloud services that provide virtual machines fall under:",
    options: ["SaaS", "PaaS", "IaaS", "On-premises"],
    answer: 2
  },
  {
    question: "Which protocol is used for time synchronization across networks?",
    options: ["FTP", "DHCP", "ICMP", "NTP"],
    answer: 3
  },
  {
    question: "SaaS applications are best described as:",
    options: [
      "User-managed servers",
      "Installed locally only",
      "Ready-to-use software over the internet",
      "Network hardware"
    ],
    answer: 2
  },
  {
    question: "DNS is used for:",
    options: ["File transfer", "IP assignment", "Name resolution", "Time sync"],
    answer: 2
  },
  {
    question: "ICMP is used for:",
    options: ["Email", "Diagnostics", "File transfer", "Encryption"],
    answer: 1
  },
  {
    question: "HTTPS differs from HTTP because it is:",
    options: ["Faster", "Uses UDP", "Encrypted", "Port 21"],
    answer: 2
  },
  {
    question: "Which protocol assigns IP addresses automatically?",
    options: ["DNS", "DHCP", "ICMP", "NTP"],
    answer: 1
  },
  {
    question: "Time synchronization protocol is:",
    options: ["DHCP", "DNS", "ICMP", "NTP"],
    answer: 3
  },
  {
    question: "TFTP is used for:",
    options: ["Secure transfers", "Large backups", "Simple transfers", "Web browsing"],
    answer: 2
  },
  {
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "ICMP", "TCP", "ARP"],
    answer: 2
  },
  {
    question: "Which tool is commonly used for real-world internet speed testing?",
    options: ["Ping", "Traceroute", "Speedtest", "Wireshark"],
    answer: 2
  },
  {
    question: "Best protocol for live video streaming:",
    options: ["TCP", "UDP", "FTP", "HTTPS"],
    answer: 1
  },
  {
    question: "Which OSI layer is responsible for logical addressing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 2
  },
  {
    question: "Secure file transfer protocol is:",
    options: ["FTP", "TFTP", "SFTP", "HTTP"],
    answer: 2
  },
  {
    question: "Which device mainly uses MAC addresses to forward data?",
    options: ["Router", "Switch", "Firewall", "Modem"],
    answer: 1
  },
  {
    question: "Bandwidth refers to:",
    options: ["Actual data transferred", "Maximum data capacity", "Network delay", "Packet loss"],
    answer: 1
  },
  {
    question: "Throughput is best defined as:",
    options: ["Maximum possible speed", "Actual data transferred", "Signal strength", "Latency"],
    answer: 1
  },
  {
    question: "A network limited to a small geographic area is called:",
    options: ["WAN", "MAN", "LAN", "PAN"],
    answer: 2
  },
  {
    question: "What does NAT stand for, and what is its primary purpose?",
    options: [
      "Node Address Translation; to map MAC addresses",
      "Network Authentication Token; to secure data transmission",
      "Network Access Terminal; to provide user authentication",
      "Network Address Translation; to conserve IP addresses"
    ],
    answer: 3
  },
  {
    question: "What does the DNS protocol primarily do?",
    options: [
      "Routes packets between networks",
      "Encrypts network traffic",
      "Manages network bandwidth",
      "Translates domain names to IP addresses"
    ],
    answer: 3
  },
  {
    question: "What does the ipconfig command display on a Windows system?",
    options: [
      "Routing table",
      "DNS server status",
      "Packet loss statistics",
      "Network configuration details"
    ],
    answer: 3
  },
  {
    question: "Which routing protocol uses a composite metric including bandwidth and delay?",
    options: ["BGP", "OSPF", "EIGRP", "RIP"],
    answer: 2
  },
  {
    question: "What is the primary function of a router?",
    options: [
      "Amplify network signals",
      "Forward packets between different networks",
      "Filter application-layer traffic",
      "Connect devices within the same LAN"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of a firewall in a network?",
    options: [
      "To amplify signals",
      "To assign IP addresses",
      "To route packets between networks",
      "To filter network traffic based on rules"
    ],
    answer: 3
  },
  {
    question: "Which factor most affects network latency?",
    options: [
      "Packet size",
      "IP address format",
      "Distance between devices",
      "Subnet mask"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of an IP address in a network?",
    options: [
      "To identify the physical location of a device",
      "To uniquely identify a device in a network",
      "To encrypt data packets",
      "To manage network bandwidth"
    ],
    answer: 1
  },
  {
    question: "Which protocol is used for dynamic routing in large networks?",
    options: ["DHCP", "ARP", "OSPF", "RIP"],
    answer: 2
  },
  {
    question: "Which attack involves overwhelming a network with traffic?",
    options: [
      "Man-in-the-middle",
      "SQL injection",
      "Denial of Service (DoS)",
      "Phishing"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of the ARP protocol?",
    options: [
      "To assign dynamic IP addresses",
      "To resolve IP addresses to MAC addresses",
      "To encrypt network traffic",
      "To manage network bandwidth"
    ],
    answer: 1
  },
  {
    question: "What is the primary advantage of a mesh topology?",
    options: [
      "Low cost",
      "High redundancy and fault tolerance",
      "Simple configuration",
      "Limited scalability"
    ],
    answer: 1
  },
  {
    question: "In the TCP/IP model, how does the Internet layer map to the OSI model?",
    options: [
      "Transport and Network layers",
      "Network and Data Link layers",
      "Network layer only",
      "Data Link and Physical layers"
    ],
    answer: 2
  },
  {
    question: "Which protocol operates at the Transport layer to provide reliable data delivery?",
    options: ["IP", "TCP", "UDP", "HTTP"],
    answer: 1
  },
  {
    question: "Which type of network connects devices within a single user’s workspace (≈10m)?",
    options: ["MAN", "LAN", "WAN", "PAN"],
    answer: 3
  },
  {
    question: "Which command checks network connectivity between two devices?",
    options: ["netstat", "ipconfig", "ping", "tracert"],
    answer: 2
  },
  {
    question: "How many bits are used in an IPv4 address?",
    options: ["16", "32", "64", "128"],
    answer: 1
  },
  {
    question: "What is a key challenge in a collapsed core network design?",
    options: [
      "Lack of redundancy",
      "Increased latency",
      "Higher costs",
      "Reduced scalability"
    ],
    answer: 3
  },
  {
    question: "Which attack exploits vulnerabilities in the TCP three-way handshake?",
    options: [
      "Smurf attack",
      "Man-in-the-middle",
      "Ping of Death",
      "SYN Flood"
    ],
    answer: 3
  },
  {
    question: "Which network topology requires a central device to connect all nodes?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    answer: 1
  },
  {
    question: "Which attack exploits vulnerabilities in the TCP three-way handshake?",
    options: [
      "Sync ACK attack",
      "SYNC attack",
      "NoSync attack",
      "SYN Flood attack"
    ],
    answer: 3
  },
  {
    question: "What does the DNS protocol primarily do?",
    options: [
      "DNS",
      "Translates domain names to IP addresses",
      "FTP",
      "ARP"
    ],
    answer: 1
  },
  {
    question: "Which encryption algorithm is used by IPsec?",
    options: ["AES", "RSA", "SHA", "MD5"],
    answer: 0
  },
  {
    question: "Which network design principle ensures high availability?",
    options: [
      "Single point of failure",
      "Static routing",
      "Minimal segmentation",
      "Redundancy and fault tolerance"
    ],
    answer: 3
  },
  {
    question: "Which security protocol is recommended for modern Wi-Fi networks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    answer: 3
  },
  {
    question: "What is a key challenge in wireless network performance?",
    options: [
      "Low security",
      "Limited bandwidth",
      "High latency",
      "Signal interference"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of a MAC address?",
    options: [
      "To encrypt traffic",
      "To assign IP addresses",
      "To identify a device within a local network",
      "To identify a device on the Internet"
    ],
    answer: 2
  },
  {
    question: "Which OSI layer ensures reliable data transfer?",
    options: ["Physical", "Data Link", "Transport", "Application"],
    answer: 2
  },
  {
    question: "What is the primary advantage of star topology?",
    options: [
      "High fault tolerance",
      "No central failure point",
      "Low cost",
      "Easy to install and manage"
    ],
    answer: 3
  },
  {
    question: "Which authentication protocol is commonly used in enterprises?",
    options: ["PAP", "CHAP", "RADIUS", "FTP"],
    answer: 2
  },
  {
    question: "Which protocol operates at the Application layer?",
    options: ["Ethernet", "HTTP", "IP", "TCP"],
    answer: 1
  },
  {
    question: "What is the purpose of VLANs?",
    options: [
      "Assign IP addresses",
      "Increase physical connections",
      "Encrypt data",
      "Logically segment a network"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of VLSM?",
    options: [
      "Standardize subnet sizes",
      "Simplify routing tables",
      "Encrypt IP addresses",
      "Optimize IP allocation using variable subnet sizes"
    ],
    answer: 3
  },
  {
    question: "How does a hub differ from a switch?",
    options: [
      "Hub supports VLANs",
      "Hub works at Layer 3",
      "Hub forwards selectively",
      "Hub broadcasts to all devices"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of a default gateway?",
    options: [
      "Encrypt packets",
      "Assign IPs",
      "Manage DNS",
      "Route traffic to external networks"
    ],
    answer: 3
  },
  {
    question: "Which protocol supports multicast traffic?",
    options: ["DHCP", "IGMP", "SNMP", "FTP"],
    answer: 1
  },
  {
    question: "Which protocol is used to monitor networks?",
    options: ["SMTP", "DHCP", "SNMP", "FTP"],
    answer: 2
  },
  {
    question: "What is the primary advantage of QUIC?",
    options: [
      "Connectionless communication",
      "Reduced connection setup time using UDP",
      "Higher packet loss",
      "Simplified encryption"
    ],
    answer: 1
  },
  {
    question: "What does the tracert command do?",
    options: [
      "Monitor traffic",
      "Display interfaces",
      "Assign IPs",
      "Trace the route packets take"
    ],
    answer: 3
  },
  {
    question: "What is the primary use of UDP?",
    options: [
      "File transfer",
      "Real-time applications like streaming",
      "HTTP",
      "UDP"
    ],
    answer: 1
  }

];

// ===============================
// LOAD QUIZ
// ===============================
const quizContainer = document.getElementById("quizContainer");

function loadQuiz() {
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    const card = document.createElement("section");
    card.className = "info-card";
    card.style.marginBottom = "2rem";

    let optionsHTML = "";
    q.options.forEach((opt, i) => {
      optionsHTML += `
        <label style="display:block; margin:.4rem 0;">
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>
      `;
    });

    card.innerHTML = `
      <h3>Q${index + 1}. ${q.question}</h3>

      <div class="options">
        ${optionsHTML}
      </div>

      <div style="margin-top:1rem; display:flex; gap:1rem;">
        <button class="btn-primary" onclick="submitQuestion(${index})">
          Submit
        </button>
        <button class="btn-secondary" onclick="resetQuestion(${index})">
          Reset
        </button>
      </div>

      <p id="result${index}" style="margin-top:.8rem; font-weight:600;"></p>
    `;

    quizContainer.appendChild(card);
  });
}

// ===============================
// SUBMIT SINGLE QUESTION
// ===============================
function submitQuestion(index) {
  const q = quizData[index];
  const options = document.getElementsByName(`q${index}`);
  const result = document.getElementById(`result${index}`);

  let selectedValue = null;

  options.forEach((opt) => {
    opt.parentElement.style.color = "";
    opt.parentElement.style.fontWeight = "normal";

    if (opt.checked) {
      selectedValue = parseInt(opt.value);
    }
  });

  if (selectedValue === null) {
    result.innerHTML = "⚠️ Please select an option.";
    result.style.color = "#facc15";
    return;
  }

  if (selectedValue === q.answer) {
    options[selectedValue].parentElement.style.color = "#22c55e";
    options[selectedValue].parentElement.style.fontWeight = "600";
    result.innerHTML = "✅ Correct Answer";
    result.style.color = "#22c55e";
  } else {
    options[selectedValue].parentElement.style.color = "#ef4444";
    options[q.answer].parentElement.style.color = "#22c55e";
    options[q.answer].parentElement.style.fontWeight = "600";
    result.innerHTML = "❌ Wrong Answer";
    result.style.color = "#ef4444";
  }
}

// ===============================
// RESET SINGLE QUESTION
// ===============================
function resetQuestion(index) {
  const options = document.getElementsByName(`q${index}`);
  const result = document.getElementById(`result${index}`);

  options.forEach((opt) => {
    opt.checked = false;
    opt.parentElement.style.color = "";
    opt.parentElement.style.fontWeight = "normal";
  });

  result.innerHTML = "";
}

// ===============================
// INIT
// ===============================
loadQuiz();
// Kuch Bhi