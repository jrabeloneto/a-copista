/**
 * Retrato da copista em moldura oval de gravura: perfil com coque,
 * pena na mão, hachura vertical de fundo e ramos de louro no pé —
 * como os retratos de autor dos frontispícios antigos.
 */
export default function RetratoOval() {
  return (
    <svg
      viewBox="0 0 160 200"
      className="retrato-oval"
      role="img"
      aria-label="Retrato em gravura da copista, de perfil, com pena na mão"
    >
      <defs>
        <clipPath id="retrato-recorte">
          <ellipse cx="80" cy="100" rx="66" ry="86" />
        </clipPath>
      </defs>
      <g filter="url(#tinta-irregular)" color="var(--ink)">
        {/* moldura oval dupla */}
        <ellipse cx="80" cy="100" rx="74" ry="94" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="80" cy="100" rx="66" ry="86" fill="none" stroke="currentColor" strokeWidth="0.7" />

        <g clipPath="url(#retrato-recorte)">
          {/* hachura vertical de fundo, atrás do busto */}
          <g stroke="currentColor" strokeWidth="0.45" opacity="0.4">
            <path d="M22 30 L22 170 M28 26 L28 174 M34 24 L34 176 M40 22 L40 178 M46 20 L46 180 M52 20 L52 178 M58 18 L58 60 M64 16 L64 52 M116 16 L116 54 M122 18 L122 62 M128 20 L128 178 M134 22 L134 176 M140 26 L140 172" />
          </g>

          <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            {/* perfil: testa, nariz, lábios, queixo */}
            <path d="M84 56 C77 58.5 73 65 73 72 C73 75 71.5 76.5 70.5 78 C70 79 70.6 80 72 80.3 C71.3 82.2 71.9 83.2 73.2 83.6 C72.7 85.6 74.2 87 76.6 86.8 C77.6 90.2 80 92.4 84 92.8" />
            {/* crânio, coque e cachos da nuca */}
            <path d="M84 56 C93 53 102 58 105 67 C107 73.5 106 80 102 85" strokeWidth="1.3" />
            <path d="M101 64 C110 60 117 67 112.5 76 C110 81 104.5 81.6 101.5 78.5" />
            <path d="M102 85 C104 88 104 91 102 93.5 C99.6 96.4 96 96.2 94.5 93.5" strokeWidth="0.9" />
            {/* risca do cabelo e mecha */}
            <path d="M84 56 C88 60 92 62 97 62.5 M86 60 C89 63.5 93 65.4 97.5 66" strokeWidth="0.7" />
            {/* olho e sobrancelha */}
            <path d="M77.5 71.5 C79.5 70.6 81.6 70.8 83 71.8" strokeWidth="0.8" />
            <path d="M78.6 74.6 C80 73.9 81.6 74 82.7 74.7" strokeWidth="0.7" />
            <circle cx="80.6" cy="74.6" r="0.8" fill="currentColor" stroke="none" />
            {/* pescoço e ombros */}
            <path d="M84 92.8 C85 98 87 102 91 105 C82 108 71 114 65 126 L64 140 M100 88 C100 94 100 99 97.5 103.5 C106 107 114 113 118 126 L119 140" strokeWidth="1.3" />
            {/* gola e prega do vestido */}
            <path d="M75 122 C84 115 98 115 106 122" strokeWidth="0.9" />
            <path d="M80 128 C86 124 95 124 101 128" strokeWidth="0.7" />
            {/* mão segurando a pena */}
            <path d="M96 130 C99 127 103 126 106 127.5 M106 127.5 C104.5 130 101 131.5 97.5 131" strokeWidth="0.9" />
            {/* pena de escrever */}
            <path d="M104 128 C114 116 124 106 136 99" strokeWidth="1" />
            <path d="M112 120 C114 116.5 117 114 120.5 112.5 M118 114 C120 110.8 123 108.4 126.5 107 M124 108.5 C126 105.5 129 103.4 132 102.2" strokeWidth="0.6" />
            {/* hachura do busto */}
            <path d="M72 132 L70 144 M78 129 L77 146 M84 128 L84 148 M90 128 L91 147 M96 129 L98 145 M102 131 L104 143" strokeWidth="0.5" opacity="0.5" />
          </g>
        </g>

        {/* ramos de louro cruzados no pé da moldura */}
        <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
          <path d="M36 176 C50 186 66 191 80 191.5 M124 176 C110 186 94 191 80 191.5" />
          <path d="M42 178 C43 174.5 46.5 173 49.5 174.5 M52 182 C53 178.5 56.5 177 59.5 178.5 M63 185.5 C64 182 67.5 180.5 70.5 182 M118 178 C117 174.5 113.5 173 110.5 174.5 M108 182 C107 178.5 103.5 177 100.5 178.5 M97 185.5 C96 182 92.5 180.5 89.5 182" strokeWidth="0.7" />
        </g>
      </g>
    </svg>
  )
}
