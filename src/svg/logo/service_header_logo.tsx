const ServiceHeaderLogo = () => {
  return (
    <>
      <svg
        width="280"
        height="60"
        viewBox="0 0 280 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Orbital Ring Background --> */}
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
          opacity="0.3"
        />
        <circle
          cx="30"
          cy="30"
          r="20"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* <!-- Central Orb --> */}
        <circle cx="30" cy="30" r="8" fill="#FF6B35" />
        <circle cx="30" cy="30" r="6" fill="#FF8A65" />

        {/* <!-- Orbiting Elements --> */}
        <circle cx="50" cy="20" r="3" fill="#FF6B35">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;360 30 30"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="15" cy="45" r="2" fill="#FF8A65">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;360 30 30"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* <!-- Text --> */}
        <text
          x="70"
          y="25"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="#2D3748"
        >
          MARK
        </text>
        <text
          x="70"
          y="45"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="#FF6B35"
        >
          ORBIT
        </text>

        {/* <!-- Connecting Line --> */}
        <line
          x1="55"
          y1="30"
          x2="70"
          y2="30"
          stroke="#E2E8F0"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};

export default ServiceHeaderLogo;
