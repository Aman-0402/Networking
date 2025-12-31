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
