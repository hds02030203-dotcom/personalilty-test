# [DESIGN] 대학생 창업 성향 테스트 UI/UX 디자인 가이드

> **문서 버전**: v1.0  
> **작성자**: 프론트엔드 역량을 갖춘 UI/UX 디자인 전문가  
> **최종 수정일**: 2026-07-29  
> **상태**: 최종 승인 및 개발 동기화 완료 (Approved)

---

## 1. 개요 및 디자인 원칙 (Design Overview & Principles)

본 디자인 가이드는 대학생 창업 성향 테스트 웹사이트의 **Visual Excellence**와 **최고 수준의 사용자 경험(UX)**을 제공하기 위해 제정되었습니다. 프론트엔드 기술과 밀접하게 결합된 실용적인 디자인 시스템 사양을 포함합니다.

### 🎨 핵심 디자인 3대 원칙
1. **High-Tech Aesthetic (미래지향적 감성)**
   * Sleek Dark 테마 위에 선명한 네온 그라디언트와 빛(Glow) 효과를 결합하여 혁신적인 스타트업 감성을 전달합니다.
2. **Glassmorphism & Depth (유리 질감과 입체감)**
   * 은은한 배경 블러(Backdrop Blur)와 반투명 테두리(Translucent Border)를 활용하여 레이어 간의 시각적 계층 구조를 명확히 합니다.
3. **Responsive Micro-Interactions (생동감 있는 마이크로 인터랙션)**
   * 호버, 클릭, 화면 전환 시 매끄러운 60fps 애니메이션을 통해 몰입감 높은 사용자 인터랙션을 제공합니다.

---

## 2. 디자인 컨셉 & 톤앤매너 (Concept & Tone & Manner)

* **메인 콘셉트**: `Futuristic Dark Startup Theme`
* **무드 보드 키워드**: `#NeonViolet`, `#CyanGlow`, `#Glassmorphism`, `#StartupTech`, `#MZVibe`
* **시각적 구조**:
  ```
  [ Background: Sleek Dark Ambient Glow ]
       └── [ Floating Glass Card: 16px Blur, 8% White Border ]
            └── [ Content Hierarchy: Gradient Heading + Clean Body + Interactive Pill ]
  ```

---

## 3. 컬러 시스템 (Color System & Tokens)

### 3.1 Primary Background & Surface Colors
| 토큰 이름 | Hex / RGBA Code | 용도 |
| :--- | :--- | :--- |
| `--bg-dark` | `#0B0F19` | 전체 웹사이트 딥 다크 배경 |
| `--bg-card` | `rgba(17, 24, 39, 0.75)` | 메인 Glassmorphic 카드 패널 |
| `--bg-card-border` | `rgba(255, 255, 255, 0.08)` | 반투명 카드 테두리 |
| `--bg-card-hover` | `rgba(30, 41, 59, 0.90)` | 선택지/카드 호버 시 배경 |

### 3.2 Accent Gradients & Neon Colors
| 토큰 이름 | CSS Gradient Code | 용도 |
| :--- | :--- | :--- |
| `--primary-gradient` | `linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)` | 메인 CTA 버튼, 핵심 텍스트 그라디언트 |
| `--secondary-gradient`| `linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)` | 태그 배지, 프로그레스 강조 |
| `--accent-pink` | `linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)` | 환상의 짝꿍, 아이디어 성향 Accent |
| `--accent-orange` | `linear-gradient(135deg, #F97316 0%, #EAB308 100%)` | 실행형 Accent, 하이라이트 배지 |
| `--neon-purple` | `#A855F7` | 아이콘 및 펄스 글로우 포인트 |

### 3.3 Text & Foreground Colors
| 토큰 이름 | Hex Code | 용도 |
| :--- | :--- | :--- |
| `--text-main` | `#F8FAFC` | H1, H2, 타이틀 (가독성 100%) |
| `--text-muted` | `#94A3B8` | 서브 타이틀, 본문 설명 (Contrast 4.5:1 이상) |
| `--text-dim` | `#64748B` | 캡션, 풋터, 부가 정보 |

---

## 4. 타이포그래피 시스템 (Typography System)

웹 폰트는 가독성과 스타트업 느낌이 물씬 나는 `Pretendard`, `Outfit`, `Noto Sans KR` 조합을 기본 적용합니다.

```css
font-family: 'Noto Sans KR', 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 4.1 Type Scale Hierarchy

| 단계 | Font Size | Weight | Line Height | Letter Spacing | 용도 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `2.5rem` (40px) | `900` (Black) | `1.25` | `-1.0px` | 메인 타이틀 |
| **Section H2** | `1.4rem` (22.4px)| `800` (Bold) | `1.35` | `-0.5px` | 질문 텍스트, 결과 타이틀 |
| **Subhead H3** | `1.1rem` (17.6px)| `700` (Bold) | `1.45` | `-0.3px` | 카드 서브 제목, 역할 명칭 |
| **Body 1** | `1.0rem` (16px) | `500` (Medium)| `1.60` | `0px` | 선택지 텍스트, 결과 본문 |
| **Body 2** | `0.88rem` (14px)| `400` (Regular)| `1.50` | `0px` | 보완점/강점 리스트 |
| **Caption / Badge**| `0.8rem` (12.8px)| `700` (Bold) | `1.20` | `0.5px` | 진행 단계, 태그 배지 |

---

## 5. 컴포넌트 디자인 가이드 (Component Specifications)

### 5.1 메인 CTA 버튼 (Primary Button)
* **기본 스타일**: `var(--primary-gradient)` 배경, 곡률 `border-radius: 50px`, 여백 `padding: 18px 36px`.
* **Glow & Depth**: `box-shadow: 0 10px 25px rgba(139, 92, 246, 0.35)`.
* **Hover State**: `transform: translateY(-2px)`, `box-shadow: 0 14px 30px rgba(139, 92, 246, 0.5)`, 밝기 `brightness(1.1)`.
* **Active State**: `transform: translateY(0)`, `box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3)`.

### 5.2 선택지 카드 (Option Buttons)
* **기본 상태**: `background: rgba(255, 255, 255, 0.03)`, `border: 1px solid rgba(255, 255, 255, 0.08)`.
* **Left Number Circle**: `width: 26px, height: 26px`, 원형 숫자 배지 `(A, B, C, D)`.
* **Hover State**: `background: rgba(30, 41, 59, 0.90)`, `border-color: #8B5CF6`, `transform: translateX(4px)`.
* **숫자 배지 Hover**: 배경 `#8B5CF6`, 텍스트 흰색 전환.

### 5.3 프로그레스 바 (Progress Indicator)
* **트랙 배경**: `height: 8px`, `background: rgba(255, 255, 255, 0.08)`, 곡률 `10px`.
* **채움 바**: `background: var(--primary-gradient)`, `transition: width 0.4s ease`.

---

## 6. 애니메이션 & 마이크로 인터랙션 (Animations & Motion)

### 6.1 화면 전환 애니메이션 (Screen Transitions)
* **Fade & Slide Up**: 화면 진입 시 아래에서 15px 올라오면서 서서히 등장.
```css
.screen {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.screen.active {
    opacity: 1;
    transform: translateY(0);
}
```

### 6.2 로딩 스피너 애니메이션 (Dual Orbit Spinner)
* 외곽 원은 시계 방향(`1.2s linear infinite`), 내부 원은 반시계 방향(`0.9s linear infinite`)으로 회전하여 입체적인 하이테크 느낌 연출.

### 6.3 토스트 알림 애니메이션 (Toast Slide-Up)
* 하단 중앙에서 `translateY(100px)` -> `translateY(0)`으로 부드럽게 등장 후 2.5초 후 이탈.

---

## 7. 레이아웃 & 반응형 시스템 (Responsive System)

모바일 퍼스트(Mobile First) 접근법을 사용하며 데스크톱에서는 `720px` 카드로 중앙 정착됩니다.

```
+---------------------------------------------------+
|               App Container (Max 720px)           |
|  +---------------------------------------------+  |
|  | Header: Logo + Tag Badge                    |  |
|  +---------------------------------------------+  |
|  |                                             |  |
|  | Screen Card (Glassmorphism Panel)           |  |
|  | - Hero Title / Questions / Results          |  |
|  |                                             |  |
|  +---------------------------------------------+  |
|  | Footer: Copyright & Guide                   |  |
+---------------------------------------------------+
```

### 7.1 브레이크포인트 가이드
* **Mobile (default < 640px)**:
  * 타이틀 크기 축소 (`1.9rem`), 카드의 좌우 패딩 `18px`, grid 1컬럼 변경.
* **Tablet / Desktop (>= 640px)**:
  * 타이틀 크기 확대 (`2.5rem`), sub-card 2컬럼 Grid 배치.

---

## 8. 접근성 & 사용성 (Accessibility Guidelines)

1. **명도 대비 (Color Contrast)**:
   * 모든 본문 텍스트(`--text-muted`)는 배경과의 명도 대비 4.5:1 이상을 준수합니다.
2. **터치 영역 (Touch Target Size)**:
   * 모든 버튼 및 선택지 카드의 최소 터치 영역은 `44px` 이상 확보.
3. **키보드 접근성 (Focus Ring)**:
   * `:focus-visible` 이용 시 `2px solid #8B5CF6` 외곽선 제공.

---

## 9. 프로덕션 CSS 변수 선언 코드 (Production CSS Tokens)

```css
:root {
    /* Color Palette */
    --bg-dark: #0b0f19;
    --bg-card: rgba(17, 24, 39, 0.75);
    --bg-card-border: rgba(255, 255, 255, 0.08);
    --bg-card-hover: rgba(30, 41, 59, 0.9);
    
    --primary-neon: #8b5cf6;
    --primary-gradient: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
    --secondary-gradient: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
    --accent-orange: linear-gradient(135deg, #f97316 0%, #eab308 100%);
    --accent-pink: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);

    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --text-dim: #64748b;

    /* Layout & Radius */
    --radius-lg: 20px;
    --radius-md: 12px;
    --radius-sm: 8px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```
