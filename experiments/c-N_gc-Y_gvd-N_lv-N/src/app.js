import ExamplesProductDetailPage from './ProductDetailPage.js';

// Simple React-like rendering function
function createElement(component) {
  const element = component();
  return element;
}

function render(component, container) {
  const element = createElement(component);
  container.innerHTML = '';

  // Convert JSX-like object to actual DOM
  function createDOMElement(vnode) {
    if (typeof vnode === 'string') {
      return document.createTextNode(vnode);
    }

    if (typeof vnode === 'object' && vnode.type) {
      const element = document.createElement(vnode.type);

      // Set attributes
      if (vnode.props) {
        Object.keys(vnode.props).forEach((key) => {
          if (key === 'children') return;
          if (key === 'className') {
            element.className = vnode.props[key];
          } else if (key === 'style' && typeof vnode.props[key] === 'object') {
            Object.assign(element.style, vnode.props[key]);
          } else {
            element.setAttribute(key, vnode.props[key]);
          }
        });
      }

      // Add children
      if (vnode.props && vnode.props.children) {
        const children = Array.isArray(vnode.props.children) ? vnode.props.children : [vnode.props.children];
        children.forEach((child) => {
          const childElement = createDOMElement(child);
          if (childElement) {
            element.appendChild(childElement);
          }
        });
      }

      return element;
    }

    return null;
  }

  // For now, we'll create a simple HTML version
  container.innerHTML = `
    <div class="bg-white content-stretch flex flex-col items-start justify-start relative size-full">
      <!-- Header -->
      <div class="bg-white relative shrink-0 w-full border-b border-[#d9d9d9]">
        <div class="box-border flex items-center justify-between p-6 relative w-full">
          <div class="flex gap-6 items-center justify-start">
            <div class="h-[35px] relative shrink-0 w-10">
              <svg viewBox="0 0 40 35" class="w-full h-full">
                <rect width="40" height="35" fill="#f24e1e"/>
                <text x="20" y="22" text-anchor="middle" fill="white" font-family="Inter" font-size="14" font-weight="600">F</text>
              </svg>
            </div>
          </div>
          <div class="box-border flex items-center justify-center p-2 rounded-full">
            <div class="relative shrink-0 size-5">
              <svg viewBox="0 0 20 20" class="w-full h-full">
                <rect x="2" y="3" width="16" height="2" fill="#1e1e1e"/>
                <rect x="2" y="9" width="16" height="2" fill="#1e1e1e"/>
                <rect x="2" y="15" width="16" height="2" fill="#1e1e1e"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Product Section -->
      <div class="bg-white box-border flex flex-col gap-6 p-6 relative shrink-0 w-full">
        <div class="flex flex-col gap-16 items-start justify-start relative shrink-0 w-full">
          <!-- Product Image -->
          <div class="bg-[#e3e3e3] h-[327px] shrink-0 w-full rounded-lg"></div>
          
          <!-- Product Details -->
          <div class="flex flex-col gap-6 items-start justify-center relative shrink-0 w-full">
            <!-- Title and Price -->
            <div class="flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <div class="flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <h1 class="font-semibold text-2xl text-[#1e1e1e] tracking-[-0.48px]">Text Heading</h1>
                <div class="flex flex-col gap-1 items-start justify-center relative shrink-0 w-full">
                  <div class="bg-[#cff7d3] flex gap-2 items-center justify-center px-2 py-1 rounded-lg">
                    <span class="font-normal text-[#02542d] text-base">Tag</span>
                  </div>
                  <div class="flex items-end justify-center relative">
                    <div class="flex font-bold items-start justify-start text-[#1e1e1e]">
                      <span class="text-2xl tracking-[-0.48px]">$</span>
                      <span class="text-5xl tracking-[-0.96px]">50</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <p class="font-normal text-[#757575] text-base leading-[1.4]">Text</p>
              </div>
            </div>
            
            <!-- Form Fields -->
            <div class="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
              <div class="flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
                <label class="font-normal text-[#1e1e1e] text-base">Label</label>
                <div class="bg-white border border-[#d9d9d9] flex gap-2 h-10 items-center justify-start px-4 py-3 rounded-lg w-full">
                  <span class="font-normal text-[#1e1e1e] text-base flex-1">Value</span>
                  <svg class="w-4 h-4" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
                <label class="font-normal text-[#1e1e1e] text-base">Label</label>
                <div class="bg-white border border-[#d9d9d9] flex gap-2 h-10 items-center justify-start px-4 py-3 rounded-lg w-full">
                  <span class="font-normal text-[#1e1e1e] text-base flex-1">Value</span>
                  <svg class="w-4 h-4" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Button -->
            <button class="bg-[#2c2c2c] flex gap-2 items-center justify-center p-3 rounded-lg w-full text-white font-normal text-base">
              Button
            </button>
            
            <!-- Accordion -->
            <div class="flex flex-col gap-4 items-start justify-start max-w-[640px] relative shrink-0 w-full">
              <div class="bg-white border border-[#d9d9d9] flex flex-col gap-2 items-start justify-start p-4 rounded-lg w-full">
                <div class="flex gap-2 items-center justify-start relative w-full">
                  <h3 class="font-semibold text-[#1e1e1e] text-base flex-1">Title</h3>
                  <svg class="w-5 h-5" viewBox="0 0 20 20">
                    <path d="M6 14l4-4 4 4" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="w-full">
                  <p class="font-normal text-[#1e1e1e] text-base leading-[1.4]">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Heart Button -->
          <div class="absolute bg-[#2c2c2c] left-2.5 rounded-full top-2.5 p-2">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="white">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Reviews Section -->
      <div class="bg-white box-border flex flex-col gap-6 p-6">
        <h2 class="font-semibold text-2xl text-[#1e1e1e] tracking-[-0.48px]">Latest reviews</h2>
        <div class="flex flex-wrap gap-6 items-start justify-start w-full">
          ${Array(3)
            .fill()
            .map(
              () => `
            <div class="bg-white border border-[#d9d9d9] flex flex-col gap-6 flex-1 min-w-60 p-6 rounded-lg">
              <!-- Star Rating -->
              <div class="flex gap-1 items-center">
                ${Array(5)
                  .fill()
                  .map(
                    () => `
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="#fbbf24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                `,
                  )
                  .join('')}
              </div>
              <!-- Review Content -->
              <div class="flex flex-col gap-1 w-full">
                <h3 class="font-semibold text-2xl text-[#1e1e1e] tracking-[-0.48px]">Review title</h3>
                <p class="font-normal text-[#1e1e1e] text-base leading-[1.4]">Review body</p>
              </div>
              <!-- Avatar -->
              <div class="flex gap-3 items-start w-full">
                <div class="w-10 h-10 rounded-full bg-gray-300"></div>
                <div class="flex flex-col gap-0.5 flex-1">
                  <p class="font-semibold text-[#757575] text-base leading-[1.4]">Reviewer name</p>
                  <p class="font-normal text-[#b3b3b3] text-base leading-[1.4]">Date</p>
                </div>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
      
      <!-- Newsletter Section -->
      <div class="bg-white box-border flex flex-col gap-6 items-center justify-start p-6 w-full">
        <div class="flex flex-col gap-2 items-center justify-start text-center w-full">
          <h2 class="font-semibold text-2xl text-[#1e1e1e] tracking-[-0.48px] w-full">Follow the latest trends</h2>
          <p class="font-normal text-[#757575] text-xl w-full">With our daily newsletter</p>
        </div>
        <div class="flex gap-3 items-start justify-start w-full">
          <div class="flex flex-col gap-2 flex-1">
            <input type="email" class="bg-white border border-[#d9d9d9] px-4 py-3 rounded-lg w-full text-base" placeholder="you@example.com">
          </div>
          <button class="bg-[#2c2c2c] flex gap-2 items-center justify-center p-3 rounded-lg text-white font-normal text-base">
            Submit
          </button>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="bg-white border-t border-[#d9d9d9] p-8 w-full">
        <div class="flex flex-col gap-16 items-start justify-start w-full">
          <!-- Footer Header -->
          <div class="flex items-center justify-between w-full">
            <div class="h-[35px] w-[23.333px]">
              <svg viewBox="0 0 24 35" class="w-full h-full">
                <rect width="24" height="35" fill="#f24e1e"/>
                <text x="12" y="22" text-anchor="middle" fill="white" font-family="Inter" font-size="14" font-weight="600">F</text>
              </svg>
            </div>
            <div class="flex gap-4 items-center justify-start">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1e1e1e">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1e1e1e">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.887 2.747.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
              </svg>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1e1e1e">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1e1e1e">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>
          
          <!-- Footer Links -->
          <div class="flex flex-col gap-6 items-start justify-start w-full">
            <!-- Use Cases -->
            <div class="flex flex-col gap-2 items-start justify-start w-full">
              <h3 class="font-bold text-[#1e1e1e] text-base">Use cases</h3>
              <div class="flex flex-col gap-2 w-full">
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">UI design</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">UX design</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Wireframing</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Diagramming</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Brainstorming</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Online whiteboard</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Team collaboration</a>
              </div>
            </div>
            
            <!-- Explore -->
            <div class="flex flex-col gap-2 items-start justify-start w-full">
              <h3 class="font-bold text-[#1e1e1e] text-base">Explore</h3>
              <div class="flex flex-col gap-2 w-full">
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Design</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Prototyping</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Development features</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Design systems</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Collaboration features</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Design process</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">FigJam</a>
              </div>
            </div>
            
            <!-- Resources -->
            <div class="flex flex-col gap-2 items-start justify-start w-full">
              <h3 class="font-bold text-[#1e1e1e] text-base">Resources</h3>
              <div class="flex flex-col gap-2 w-full">
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Blog</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Best practices</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Colors</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Color wheel</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Support</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Developers</a>
                <a href="#" class="font-normal text-[#1e1e1e] text-base hover:underline">Resource library</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(ExamplesProductDetailPage, root);
});
